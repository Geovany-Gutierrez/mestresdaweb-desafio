import { useEffect, useState } from "react";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setIsLoggedIn(!!storedUser.token);
    setCurrentUser(storedUser);
  }, []);

  return isLoggedIn ? <HomePage /> : <LoginPage />;
}

export default App;