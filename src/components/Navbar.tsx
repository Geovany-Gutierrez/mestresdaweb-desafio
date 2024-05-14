import { FaBars as IconeCustomizado } from "react-icons/fa";
import { useState, useCallback, useEffect } from "react";
import {
  MenuHamburguerEstilizado,
  ItemMobileEstilizado,
  ContainerEstilizado,
  ListaEstilizadaCustomizada,
  BarraNavegacaoEstilizadaCustomizada,
  BlocoConteudoEstilizado,
  ListaClicavel,
  ListaMobileEstilizada,
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
  const [categoriaAtual, setCategoriaAtual] = useState<string>("personagens"); // Adicionado tipo string ao estado
  const mudarCategoria = (categoria: string) => {
    // Adicionado tipo string ao parâmetro
    setCategoriaAtual(categoria);
    localStorage.setItem("categoriaAtual", categoria);
  };

  useEffect(() => {
    const categoriaSalva = localStorage.getItem("categoriaAtual");
    if (categoriaSalva) {
      setCategoriaAtual(categoriaSalva);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <BarraNavegacaoEstilizadaCustomizada>
      <ContainerEstilizado>
        <Logo />
        <ListaEstilizadaCustomizada>
          <li onClick={() => mudarCategoria("personagens")}>
            <a href={`/${categoriaAtual}`}>Personagens</a>
          </li>
          <li onClick={() => mudarCategoria("filmes")}>
            <a href={`/${categoriaAtual}`}>Filmes</a>
          </li>
          <li onClick={() => mudarCategoria("hqs")}>
            <a href={`/${categoriaAtual}`}>Hqs</a>
          </li>
          <BlocoConteudoEstilizado>
            <img src="/images/profile-picture.png" alt="Profile" />
            <ListaClicavel>
              <Logout />
            </ListaClicavel>
          </BlocoConteudoEstilizado>
        </ListaEstilizadaCustomizada>
        <MenuHamburguerEstilizado onClick={toggleMenu}>
          <IconeCustomizado size={48} color="#FFF" />
        </MenuHamburguerEstilizado>
      </ContainerEstilizado>
      {isMenuOpen && (
        <>
          <ListaMobileEstilizada>
            <ItemMobileEstilizado>
              <a
                onClick={() => mudarCategoria("personagens")}
                href={`/${categoriaAtual}`}
              >
                Personagens
              </a>
            </ItemMobileEstilizado>
            <ItemMobileEstilizado>
              <a
                onClick={() => mudarCategoria("filmes")}
                href={`/${categoriaAtual}`}
              >
                Filmes
              </a>
            </ItemMobileEstilizado>
            <ItemMobileEstilizado>
              <a
                onClick={() => mudarCategoria("hqs")}
                href={`/${categoriaAtual}`}
              >
                Hqs
              </a>
            </ItemMobileEstilizado>
            <ItemMobileEstilizado>
              <Logout />
            </ItemMobileEstilizado>
          </ListaMobileEstilizada>
        </>
      )}
    </BarraNavegacaoEstilizadaCustomizada>
  );
};

export default Navbar;
