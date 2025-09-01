import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}`);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 sm:p-8 space-y-4">
        <div className="text-left mb-2">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-600 mt-1">
            Please enter your details to sign up
          </p>
        </div>

        {/* Name */}
        <Box mb={1.5}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        {/* Email */}
        <Box mb={1.5}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        {/* Password */}
        <Box mb={1.5}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            type={showPassword ? "text" : "password"}
            fullWidth
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

        {/* Confirm Password */}
        <Box mb={1.5}>
          <TextField
            id="confirm-password"
            label="Confirm Password"
            variant="outlined"
            size="small"
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Sign Up Button */}
        <button className="bg-blue-500 cursor-pointer text-white w-full py-2 rounded hover:bg-blue-600 transition">
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-2">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 w-full py-2 px-6 text-black font-medium rounded-lg border border-gray-400 hover:bg-gray-100 transition"
          disabled={loading}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Icon"
            className="w-5 h-5"
          />
          {loading ? "Signing up..." : "Sign up with Google"}
        </button>

        {/* Login Redirect */}
        <p className="text-sm text-center mt-3 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
