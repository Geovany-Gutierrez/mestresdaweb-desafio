import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/login/LoginPage";
import Personagens from "./routes/Personagens";
import Filmes from "./routes/Filmes";
import Hqs from "./routes/Hqs";

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
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/personagens" element={<Personagens />} />
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/hqs" element={<Hqs />} />
            <Route path="*" element={<Navigate replace to="/personagens" />} />
          </>
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
