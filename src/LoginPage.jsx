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

export default function ButtonUsage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    setError("");
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Login successful!");
      navigate("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
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
                Authentication
              </Typography>

              <Typography variant="h5" gutterBottom>
                Login
              </Typography>

              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}

              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                size="small"
                margin="dense"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
                onClick={handleLogin}
              >
                Login
              </Button>

              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ mt: 2 }}
                fullWidth
                onClick={handleGoogleLogin}
              >
                Login using Google
              </Button>

              <Typography variant="body2" sx={{ mt: 2 }}>
                Don't have an account?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </React.Fragment>
  );
}
