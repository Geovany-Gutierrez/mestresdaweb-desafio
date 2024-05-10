import React from "react";
import styled from "styled-components";

// Interface para definir o tipo da propriedade currentUser
interface Props {
  currentUser: {
    username: string;
  } | null; // currentUser pode ser null se nenhum usuário estiver logado
}

// Defina o estilo usando styled-components
const MeuTeste = styled.p`
    width: 100%;
    background-color: black;
    height: 100vh;
    color: white;
    font-size: 150px;
`;

// Adicione a interface como argumento da função do componente
function teste({ currentUser }: Props) {
    return (
        <>
            <MeuTeste>TESTE</MeuTeste>
            <p>Usuário atual: {currentUser ? currentUser.username : "Validaçao do type"}</p>
        </>
    );
}

export default teste;
