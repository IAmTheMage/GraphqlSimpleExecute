import React from 'react';
import {RiHome7Line, RiFileList2Line} from 'react-icons/ri';
import {FiMail} from 'react-icons/fi';
import {GrNotification} from 'react-icons/gr';
import { Container, ContentContainer, Logo, NavigationContainer,
    NavigationItem,
} from './styles';
import logo from '../../../assets/Twitter_Logo_Blue.png';


export default function LeftColumnFeedPage() {
  return (
    <Container>
        <ContentContainer>
            <Logo src={logo}></Logo>
            <NavigationContainer>
                <RiHome7Line size={25} color="#1da1f2"></RiHome7Line>
                <NavigationItem color="#1da1f2">Pagina inicial</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <RiHome7Line size={25}></RiHome7Line>
                <NavigationItem>Explorar</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <GrNotification size={25}></GrNotification>
                <NavigationItem>Notificações</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <FiMail size={25}></FiMail>
                <NavigationItem>Mensagens</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <RiHome7Line size={25}></RiHome7Line>
                <NavigationItem>Itens Salvos</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <RiFileList2Line size={25}></RiFileList2Line>
                <NavigationItem>Lista</NavigationItem>
            </NavigationContainer>
        </ContentContainer>
    </Container>
  );
}
