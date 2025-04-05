import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
