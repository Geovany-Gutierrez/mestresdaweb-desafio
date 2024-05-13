import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setIsLoggedIn(!!storedUser.token);
    setCurrentUser(storedUser);
  }, []);

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/personagens" element={<HomePage categoria="personagens" />} />
          <Route path="/filmes" element={<HomePage categoria="filmes" />} />
          <Route path="/hqs" element={<HomePage categoria="hqs" />} />
          <Route path="*" element={<RedirectToPersonagens />} />
        </Routes>
      ) : (
        <LoginPage />
      )}
    </Router>
  );
}

// Componente para redirecionar para "/personagens"
function RedirectToPersonagens() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/personagens');
  }, [navigate]);

  return null;
}

export default App;
