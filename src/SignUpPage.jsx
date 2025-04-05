import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { supabase } from "./supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Signup successful! Please verify your email.");
      navigate("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        window.location.href = "/dashboard";
      }
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          width: "100vw",
        }}
      >
        <Container maxWidth="sm">
          <Card elevation={3} sx={{ padding: 3, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Sign Up
              </Typography>

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                size="small"
                margin="dense"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                size="small"
                margin="dense"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && (
                <Typography color="error" sx={{ mt: 1 }}>
                  {error}
                </Typography>
              )}

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ mt: 2 }}
                fullWidth
                onClick={handleGoogleLogin}
              >
                SignUp using Google
              </Button>

              <Typography variant="body2" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </React.Fragment>
  );
}
