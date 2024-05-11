import React, { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import {
  Background,
  FormContainer,
  Wrapper,
  Overlay,
  StyledForm,
} from "../../styles/loginPage.styles";

// Componente
const LoginPage = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Verifica se a largura da janela é maior ou igual a 1440px
    if (window.innerWidth >= 1440) {
      // Define um temporizador para alterar o estado após as animações serem concluídas
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 2500); // Total de 2.5 segundos para as animações
      if (window.innerWidth < 1440) {
        setShowOverlay(false);
      }
      // Limpa o temporizador quando o componente é desmontado
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showOverlay && (
        <Overlay showOverlay={showOverlay}>
          <Logo />
        </Overlay>
      )}
      <FormContainer>
        <Wrapper>
          {!showOverlay && (
            <>
              <Logo />
              <StyledForm>
                <Form />
              </StyledForm>
            </>
          )}
        </Wrapper>
        <Background />
      </FormContainer>
    </>
  );
};

export default LoginPage;
