import * as React from "react";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function DashboardPage() {
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
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
