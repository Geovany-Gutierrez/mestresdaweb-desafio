import { Title, Paragraph, InputField, FormFlex, FormLabel, SubmitButton, RedSpan } from '../styles/form.styles'

// Componente
const Form = () => {
    return (
        <form action="/personagens">
            <Title>Bem vindo(a) de volta!</Title>
            <Paragraph>Acesse sua conta</Paragraph>
            <InputField placeholder="Usuário" />
            <InputField placeholder="Senha" />
            <FormFlex>
                <div>
                    <input type="checkbox" id="salvarLogin" />
                    <FormLabel htmlFor="salvarLogin"> Salvar login</FormLabel>
                </div>
                <a href="#"><Paragraph>Esqueci a senha</Paragraph></a>
            </FormFlex>
            <SubmitButton type="submit" value="Entrar" />
            <Paragraph $textAlign="center">Ainda não tem o login? <a href="#"><RedSpan>Cadastre-se</RedSpan></a></Paragraph>
        </form>
    );
};

export default Form;
