import React, {useEffect} from 'react';
import rest from '../../services/axios';


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
        <div>
            <h1>Feed</h1>
        </div>
    )
}
