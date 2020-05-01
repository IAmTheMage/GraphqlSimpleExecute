import React, {useEffect} from 'react';
import rest from '../../services/axios';
import {Container} from './styles';
import LeftColumn from '../components/LeftColumnFeedPage/index';


export default function Feed({history}) {

    useEffect(() => {
        checkLogin();
    }, [])

    async function checkLogin() {
        const token = localStorage.getItem('token');
        if(!token) {
            history.push('/')
        }
        rest.post('/checkLogin', {}, {
            headers: {
                authorization: token
            }
        }).catch((err) => {
            history.push('/')
        });
    }

    return (
        <Container>
            <LeftColumn></LeftColumn>
        </Container>
    )
}
