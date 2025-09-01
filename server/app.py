from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
import requests
import datetime

app = Flask(__name__)

# ==== CONFIG ====
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Change for your DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your-secret-key'  # Change to a secure key in production

db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app, origins=["http://localhost:3000", "http://localhost:5173"], supports_credentials=True)

# ==== DATABASE MODEL ====
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    name = db.Column(db.String(150))
    password = db.Column(db.String(200))  # hashed
    provider = db.Column(db.String(50), default="email")  # 'email' or 'google'

# ==== CREATE DB ====
with app.app_context():
    db.create_all()

# ==== EMAIL/PASSWORD SIGNUP ====
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    name = data.get("name")

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = generate_password_hash(password)
    new_user = User(email=email, name=name, password=hashed_pw, provider="email")
    db.session.add(new_user)
    db.session.commit()

    token = create_access_token(identity=email, expires_delta=datetime.timedelta(hours=1))
    return jsonify({"access_token": token})

# ==== EMAIL/PASSWORD LOGIN ====
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = create_access_token(identity=email, expires_delta=datetime.timedelta(hours=1))
    return jsonify({"access_token": token})

# ==== GOOGLE LOGIN ====
@app.route('/google-login', methods=['POST'])
def google_login():
    data = request.json
    id_token = data.get("id_token")  # sent from frontend after Google sign-in

    if not id_token:
        return jsonify({"error": "No token provided"}), 400

    # Verify token with Google
    google_verify_url = f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}"
    res = requests.get(google_verify_url)
    if res.status_code != 200:
        return jsonify({"error": "Invalid Google token"}), 401

    info = res.json()
    email = info.get("email")
    name = info.get("name")

    if not email:
        return jsonify({"error": "Email not found in Google token"}), 400

    # Create user if not exists
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(email=email, name=name, provider="google")
        db.session.add(user)
        db.session.commit()

    # Create JWT token
    token = create_access_token(identity=email, expires_delta=datetime.timedelta(hours=1))
    return jsonify({"access_token": token})

# ==== PROTECTED ROUTE ====
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Hello, {current_user}! You are authenticated."})

# ==== RUN SERVER ====
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
