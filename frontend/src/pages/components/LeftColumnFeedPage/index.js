import React from 'react';
import {RiHome7Line, RiFileList2Line} from 'react-icons/ri';
import {FaHashtag} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {GrNotification} from 'react-icons/gr';
import {BsPerson} from 'react-icons/bs';
import {MdMoreHoriz, MdBookmarkBorder} from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { Container, ContentContainer, Logo, NavigationContainer,
    NavigationItem, TweetButton, ProfileContainer,
    ProfileImage, ProfileName
} from './styles';
import logo from '../../../assets/Twitter_Logo_Blue.png';


export default function LeftColumnFeedPage() {
  return (
    <Container>
        <ContentContainer>
            <Logo src={logo}></Logo>
            <NavigationContainer>
                <RiHome7Line size={22} color="#1da1f2"></RiHome7Line>
                <NavigationItem color="#1da1f2">Pagina inicial</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <FaHashtag size={22}></FaHashtag>
                <NavigationItem>Explorar</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <GrNotification size={22}></GrNotification>
                <NavigationItem>Notificações</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <FiMail size={22}></FiMail>
                <NavigationItem>Mensagens</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <MdBookmarkBorder size={22}></MdBookmarkBorder>
                <NavigationItem>Itens Salvos</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <RiFileList2Line size={22}></RiFileList2Line>
                <NavigationItem>Listas</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <BsPerson size={22}></BsPerson>
                <NavigationItem>Perfil</NavigationItem>
            </NavigationContainer>
            <NavigationContainer>
                <MdMoreHoriz size={22}></MdMoreHoriz>
                <NavigationItem>Mais</NavigationItem>
            </NavigationContainer>
            <TweetButton>Tweetar</TweetButton>
            <ProfileContainer>
                <ProfileImage src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></ProfileImage>
                <ProfileName>
                    Gustavo Gonç...
                </ProfileName>
                <IoIosArrowDown size={15}></IoIosArrowDown>
            </ProfileContainer>
        </ContentContainer>
    </Container>
  );
}
