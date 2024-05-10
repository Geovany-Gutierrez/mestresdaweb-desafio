import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage/loginPage";
import Teste from "./pages/CarouselPage/teste";

function App() {
  // Defina um estado para armazenar se o usuário está logado
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Defina um estado para armazenar as informações do usuário logado
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Verifica se há um usuário logado no localStorage
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (storedUser && storedUser.token) {
      // Se houver um usuário logado com um token, define isLoggedIn como true
      setIsLoggedIn(true);
      // Define o estado currentUser com as informações do usuário
      setCurrentUser(storedUser);
    } else {
      // Se não houver usuário logado ou usuário sem token, define isLoggedIn como false
      setIsLoggedIn(false);
      // Reseta o currentUser para null
      setCurrentUser(null);
    }
  }, [isLoggedIn]); // Executa sempre que o estado de isLoggedIn mudar

  // Renderiza a página de teste se isLoggedIn for true, senão, renderiza a página de login
  return (
    <>
      {isLoggedIn ? <Teste currentUser={currentUser} /> : <LoginPage />}
    </>
  );
}

export default App;
