import * as React from "react";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase"; // adjust the path if different

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card elevation={3} sx={{ padding: 3, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Authentication
            </Typography>
            <Typography variant="h5" gutterBottom>
              Dashboard
            </Typography>

            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 3 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
