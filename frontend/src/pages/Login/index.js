import React, {useState, useEffect} from 'react';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Container, Form, FormLogo, FormTitle, 
  InputContainer, InputDescription, Input,
  SubmitContainer, SubmitButton
} from './styles';
import logo from '../../assets/Twitter_Logo_Blue.png';


const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      error
      user {
        name
        email
      }
    }
  }
`;

export default function Login() {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const client = useApolloClient();

  useEffect(() => {
    transformSubmitButtonOpacity();
  }, [email, password])

  const transformSubmitButtonOpacity = () => {
    if(
      email && 
      password && 
      email.includes("@") && 
      password.length >= 6) {
      setEnabled(true);
    }
    else {
      setEnabled(false);
    }
  }

  const Login = () => {
    const [login, {data, error}] = useMutation(LOGIN_MUTATION)

    if(error) {
      console.log(error)
    }

    return (
      <Form onSubmit={(e) => {
        e.preventDefault();
        login({variables: {email: "gustavosjn2013@gmail.com", password: "123456"}})
      }}>
            <FormLogo src={logo}></FormLogo>
            <FormTitle>Entrar no Twitter</FormTitle>
            <InputContainer>
              <InputDescription>E-mail</InputDescription>
              <Input onChange={(e) => setEmail(e.target.value)}></Input>
            </InputContainer>
            <InputContainer style={{marginTop: 25}}>
              <InputDescription>Senha</InputDescription>
              <Input onChange={(e) => setPassword(e.target.value)}></Input>
            </InputContainer>
            <SubmitContainer>
              <SubmitButton enabled={enabled}>Entrar</SubmitButton>
            </SubmitContainer>
        </Form>
    )
  }

  

  return (
    <Container>
        {Login()}
    </Container>
  );
}
