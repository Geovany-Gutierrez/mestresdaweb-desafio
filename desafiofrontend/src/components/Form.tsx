import {
  Title,
  Paragraph,
  InputField,
  FormLabel,
  SubmitButton,
  RedSpan,
} from "../styles/Form.styles";

// Componente
import React, { useState } from "react";

function generateToken() {
  // Gera um número aleatório de 16 dígitos
  return Math.random().toString(36).substring(2, 18);
}

const Form: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState(0); // 0 é o login e 1 é o registro
  const [, setLoggedIn] = useState(false); 

  const handleToggleForm = () => {
    setUsername(""); // Limpa o username ao alternar entre os formulários
    setPassword(""); // Limpa a senha ao alternar entre os formulários
    setFormType(formType === 0 ? 1 : 0);
  };

  const handleRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const usernameToCreate = (document.getElementById(
      "createUser"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras
    const passwordToCreate = (document.getElementById(
      "createPassword"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras

    if (!usernameToCreate || !passwordToCreate) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem(usernameToCreate) || "null"
    );
    if (existingUser) {
      alert("Este usuário já existe. Por favor, escolha outro nome de usuário.");
      return;
    }

    const token = generateToken();
    const newUser = {
      username: usernameToCreate,
      password: passwordToCreate,
      token: token
    };

    localStorage.setItem(usernameToCreate, JSON.stringify(newUser));
    alert("Registro bem-sucedido! Por favor, faça login.");
    handleToggleForm();
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    const usernameInput = (document.getElementById(
      "username"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras
    const passwordInput = (document.getElementById(
      "password"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras

    if (!usernameInput || !passwordInput) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const storedUser = JSON.parse(
      localStorage.getItem(usernameInput) || "null"
    );
    if (storedUser && storedUser.password === passwordInput) {
      if (!storedUser.token) {
        const token = generateToken();
        storedUser.token = token;
        localStorage.setItem(usernameInput, JSON.stringify(storedUser));
      }
      localStorage.setItem('currentUser', JSON.stringify(storedUser));
      setLoggedIn(true);
      alert("Login bem-sucedido!");
      window.location.reload(); // Recarrega a página após o login bem-sucedido
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <form
      onSubmit={formType === 0 ? handleLogin : handleRegister}
      action=""
    >
      <Title>
        {formType === 0 ? "Bem vindo(a) de volta!" : "Crie sua conta!"}
      </Title>
      <Paragraph>
        {formType === 0 ? "Acesse sua conta" : "Crie uma nova conta"}
      </Paragraph>
      <InputField
        id={formType === 0 ? "username" : "createUser"}
        placeholder={formType === 0 ? "Usuário" : "Crie seu Usuário"}
        value={username}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setUsername(e.target.value)
        }
      />
      <InputField
        id={formType === 0 ? "password" : "createPassword"}
        placeholder={formType === 0 ? "Senha" : "Crie sua Senha"}
        value={password}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setPassword(e.target.value)
        }
      />
      {formType === 0 ? (
        <div>
          <input type="checkbox" id="salvarLogin" />
          <FormLabel htmlFor="salvarLogin"> Salvar login</FormLabel>
        </div>
      ) : null}
      <SubmitButton
        type="submit"
        value={formType === 0 ? "Entrar" : "Registrar"}
      />
      <Paragraph $textAlign="center">
        {formType === 0 ? "Ainda não tem o login?" : "Já tem uma conta?"}
        <a href="#" onClick={handleToggleForm}>
          <RedSpan>{formType === 0 ? "Cadastre-se" : "Faça login"}</RedSpan>
        </a>
      </Paragraph>
    </form>
  );
};

export default Form;
