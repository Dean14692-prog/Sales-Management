// import { useState } from "react";
// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { Link } from "react-router-dom";

// const Signin = () => {
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("User Info:", user);
//       alert(`Welcome, ${user.displayName}`);
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//       alert("Login failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => event.preventDefault();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
//       <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 space-y-6">
//         <div className="text-left">
//           <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
//           <p className="text-gray-500">Please Enter your details</p>
//         </div>

//         <Box mb={2}>
//           <TextField
//             id="email"
//             label="Email"
//             variant="outlined"
//             size="small"
//             fullWidth
//           />
//         </Box>

//         {/* Password Field */}
//         <Box mb={2}>
//           <TextField
//             id="password"
//             label="Password"
//             variant="outlined"
//             size="small"
//             type={showPassword ? "text" : "password"}
//             fullWidth
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>

//         {/* Remember Me and Forgot Password */}
//         <div className="flex items-center justify-between text-sm text-gray-600">
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="form-checkbox" />
//             Remember me
//           </label>
//           <Link to="/forgot-password" className="text-blue-600 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>

//         <button className="bg-blue-500 cursor-pointer text-white w-full py-2 rounded hover:bg-blue-600 transition">
//           Sign In
//         </button>

//         <div className="flex items-center my-2">
//           <hr className="flex-grow border-t border-gray-300" />
//           <span className="mx-4 text-gray-500 text-sm">or</span>
//           <hr className="flex-grow border-t border-gray-300" />
//         </div>

//         {/* Google Button */}
//         <button
//           onClick={handleGoogleLogin}
//           className="flex items-center justify-center gap-2 w-full py-2 px-6 text-black font-medium rounded-lg transition duration-300 border border-gray-400 cursor-pointer"
//           disabled={loading}
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="Google Icon"
//             className="w-5 h-5"
//           />
//           {loading ? "Signing in..." : "Sign in with Google"}
//         </button>

//         {/* Sign Up Link */}
//         <p className="text-sm text-center mt-6 text-gray-500">
//           Don't have an account?
//           <Link
//             to="/signup"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;

// src/components/Signin.jsx
import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // EMAIL / PASSWORD LOGIN -> calls Flask /login
  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Email and password required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || "Login failed");
      } else {
        // Backend returns access_token & refresh_token (or access_token named key)
        const access = data.access_token || data.token || data.accessToken;
        const refresh = data.refresh_token || data.refreshToken;
        if (access) localStorage.setItem("access_token", access);
        if (refresh) localStorage.setItem("refresh_token", refresh);
        alert("Signed in successfully");
        // optional: navigate to protected page
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      alert("Login error");
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN -> sign in with Firebase, get Firebase ID token, send to Flask
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // get firebase id token
      const idToken = await user.getIdToken();

      // Send idToken to Flask
      const res = await fetch("http://127.0.0.1:5000/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Server error:", data);
        alert(data.msg || "Google login failed on server");
      } else {
        // Backend returns access_token and refresh_token
        const access = data.access_token || data.accessToken || data.accessToken;
        const refresh = data.refresh_token || data.refreshToken;
        if (access) localStorage.setItem("access_token", access);
        if (refresh) localStorage.setItem("refresh_token", refresh);
        alert(`Welcome, ${user.displayName || user.email}`);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      alert("Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 space-y-6">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500">Please Enter your details</p>
        </div>

        <Box mb={2}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box mb={2}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          onClick={handleSignIn}
          className="bg-blue-500 cursor-pointer text-white w-full py-2 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="flex items-center my-2">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 w-full py-2 px-6 text-black font-medium rounded-lg transition duration-300 border border-gray-400 cursor-pointer"
          disabled={loading}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Icon"
            className="w-5 h-5"
          />
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>

        <p className="text-sm text-center mt-6 text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

