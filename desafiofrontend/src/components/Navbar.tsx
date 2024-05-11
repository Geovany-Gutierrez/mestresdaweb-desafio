import { FaBars as IconeCustomizado } from "react-icons/fa";
import { useState, useCallback } from "react";
import {
  MenuHamburguerEstilizado,
  ItemMobileEstilizado,
  ContainerEstilizado,
  ListaEstilizadaCustomizada,
  BarraNavegacaoEstilizadaCustomizada,
  BlocoConteudoEstilizado,
  ListaClicavel,
} from "../styles/Navbar.styles";
import Logo from "./Logo";

const Logout = () => {
  const handleLogout = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (data) {
      data.token = "";
      localStorage.setItem("currentUser", JSON.stringify(data));
      window.location.reload();
    }
  }, []);

  return <a onClick={handleLogout}>Sair</a>;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <BarraNavegacaoEstilizadaCustomizada>
      <ContainerEstilizado>
        <a href="/">
          <Logo />
        </a>
        <ListaEstilizadaCustomizada>
          <li><a href="/characters">Personagens</a></li>
          <li><a href="/movies">Filmes</a></li>
          <li><a href="/comics">Hqs</a></li>
          <BlocoConteudoEstilizado>
            <img src="/images/profile-picture.png" alt="Profile" />
            <ListaClicavel><Logout /></ListaClicavel>
          </BlocoConteudoEstilizado>
        </ListaEstilizadaCustomizada>
        <MenuHamburguerEstilizado onClick={toggleMenu}>
          <IconeCustomizado size={24} color="#FFF" />
        </MenuHamburguerEstilizado>
      </ContainerEstilizado>
      {isMenuOpen && (
        <>
          <ItemMobileEstilizado><a href="/characters">Characters</a></ItemMobileEstilizado>
          <ItemMobileEstilizado><a href="/movies">Movies</a></ItemMobileEstilizado>
          <ItemMobileEstilizado><a href="/comics">Comics</a></ItemMobileEstilizado>
          <ItemMobileEstilizado><Logout /></ItemMobileEstilizado>
        </>
      )}
    </BarraNavegacaoEstilizadaCustomizada>
  );
};

export default Navbar;
