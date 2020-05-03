import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';
import { Container, Form, FormLogo, FormTitle, 
  InputContainer, InputDescription, Input,
  SubmitContainer, SubmitButton, LinkToLoginPage
} from './styles';
import logo from '../../assets/Twitter_Logo_Blue.png';
import rest from '../../services/axios';
import {CREATEACCOUNTMUTATION} from './mutation';


export default function SignUp({history}) {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    detectInputChangeAndSetButtonDisabledValue()
  }, [name, email, password]);

  useEffect(() => {
      checkLogin();
      
  }, [])

    const detectInputChangeAndSetButtonDisabledValue = () => {
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

    const Submit = () => {
        const [createAccount] = useMutation(CREATEACCOUNTMUTATION)

        return (
            <Form onSubmit={async (e) => {
                e.preventDefault();
                await createAccount({
                    variables: {
                        name,
                        email,
                        password
                    }
                })
                history.push('/')
            }}>
                <FormLogo src={logo}></FormLogo>
                <FormTitle>Entrar no Twitter</FormTitle>
                <InputContainer>
                <InputDescription >Nome</InputDescription>
                <Input onChange={(e) => setName(e.target.value)}></Input>
                </InputContainer>
                <InputContainer style={{marginTop: 25}}>
                <InputDescription>E-mail</InputDescription>
                <Input onChange={(e) => setEmail(e.target.value)}></Input>
                </InputContainer>
                <InputContainer style={{marginTop: 25}}>
                <InputDescription>Senha</InputDescription>
                <Input type="password" onChange={(e) => setPassword(e.target.value)}></Input>
                </InputContainer>
                <SubmitContainer>
                <SubmitButton disabled={!enabled} enabled={enabled}>Entrar</SubmitButton>
                </SubmitContainer>
                <LinkToLoginPage onClick={() => {
                history.push('/')
                }}>Ja possuo conta</LinkToLoginPage>
            </Form>
        )
    }
  

    return (
        <Container>
            {Submit()}
        </Container>
    );
}
