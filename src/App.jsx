import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

function AuthListener() {
  const navigate = useNavigate();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/dashboard");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [navigate]);

  return null;
}

function App() {
  return (
    <>
      <AuthListener />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* other routes */}
      </Routes>
    </>
  );
}

export default App;
