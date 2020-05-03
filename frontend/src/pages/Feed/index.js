import React, {useEffect} from 'react';
import rest from '../../services/axios';
import {Container} from './styles';
import LeftColumn from '../components/LeftColumnFeedPage';
import MidColumnFeedPage from '../components/MidColumnFeedPage';
import RightColumn from '../components/RightColumnFeedPage';


export default function Feed({history}) {

    useEffect(() => {
        checkLogin();
    }, [])

    async function checkLogin() {
        const token = localStorage.getItem('token');
        console.log(token)
        if(!token) {
            history.push('/')
        }
        rest.post('/checkLogin', {}, {
            headers: {
                authorization: token
            }
        }).catch((err) => {
            console.log("Catch")
            history.push('/')
        });
    }

    return (
        <Container>
            <LeftColumn />
            <MidColumnFeedPage data={{pageName: "Pagina inicial"}}></MidColumnFeedPage>
            <RightColumn />
        </Container>
    )
}
