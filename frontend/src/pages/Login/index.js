import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Container, Form, FormLogo, FormTitle, 
  InputContainer, InputDescription, Input,
  SubmitContainer, SubmitButton, LinkToSignUpPage
} from './styles';
import logo from '../../assets/Twitter_Logo_Blue.png';
import rest from '../../services/axios';


const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      token
      error
      user {
        name
        email
      }
    }
  }
`;

export default function Login({history}) {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    transformSubmitButtonOpacity();
  }, [email, password])

  useEffect(() => {
    checkLogin()
  }, [])

  async function checkLogin() {
    const token = localStorage.getItem('token');
    if(token) {
        const response = await rest.post('/checkLogin', {}, {
            headers: {
                authorization: token
            }
        });
        if(response.data.token.id) {
            history.push('/feed');
        }
    }

  } 

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
    const [login, {error}] = useMutation(LOGIN_MUTATION)

    if(error) {
      console.log(error)
    }

    return (
      <Form onSubmit={async (e) => {
        e.preventDefault();
        const response = await login({variables: {email: email, password: password}})
        const {token} = response.data.Login;
        if(token) {
          localStorage.setItem('token', token);
          history.push('/feed')
        }
        else {
          alert("Error, usuario nao encontrado")
        }
        
      }}>
            <FormLogo src={logo}></FormLogo>
            <FormTitle>Entrar no Twitter</FormTitle>
            <InputContainer>
              <InputDescription>E-mail</InputDescription>
              <Input onChange={(e) => setEmail(e.target.value)}></Input>
            </InputContainer>
            <InputContainer style={{marginTop: 25}}>
              <InputDescription>Senha</InputDescription>
              <Input type="password" onChange={(e) => setPassword(e.target.value)}></Input>
            </InputContainer>
            <SubmitContainer>
              <SubmitButton enabled={enabled}>Entrar</SubmitButton>
            </SubmitContainer>

            <LinkToSignUpPage onClick={() => {
                history.push('/signUp')
            }}>Nao possuo conta</LinkToSignUpPage>
        </Form>
    )
  }

  

  return (
    <Container>
        {Login()}
    </Container>
  );
}
