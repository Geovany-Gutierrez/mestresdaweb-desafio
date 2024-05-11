import styled from "styled-components";

export const BarraNavegacaoEstilizadaCustomizada = styled.div`
    width: 100%;
    background-color: #000;
    box-shadow: 0px 4px 4px rgba(255, 0, 0, 0.5);
    padding: 1rem 0;
`;

export const ListaEstilizadaCustomizada = styled.ul`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3em;
    list-style: none;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const ContainerEstilizado = styled.div`
    max-width: 1440px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BlocoConteudoEstilizado = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuHamburguerEstilizado = styled.span`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const ListaMobileEstilizada = styled.ul`
    max-width: 90%;
    margin: 20px auto;
    font-size: 1.5rem;
`;

export const ItemMobileEstilizado = styled.li`
    margin-top: 1rem;
`;

export const IconeHamburguerEstilizado = styled.svg`
    height: 2rem;
    width: 2rem;
    fill: #ffffff;
    stroke: #000000;
    background-color: #ffffff;
    stroke-linecap: round;
    stroke-linejoin: round;
`;

export const ListaClicavel = styled.li`
    cursor: pointer;
`
