import React from 'react';
import {WiStars} from 'react-icons/wi';
import {Container, Name} from './styles';


export default function MidColumnHeader({pageName}) {
    return (
        <Container>
            <Name>{pageName}</Name>
            <WiStars style={{marginRight: 15}} color="#1da1f2" size={20}></WiStars>
        </Container>
    )
}
