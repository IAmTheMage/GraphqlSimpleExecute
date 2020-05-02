import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { Container } from './styles';
import {FETCHTWEETS} from './query';


export default function Tweets() {
		
		function GetTweets() {
			const {loading, error, data} = useQuery(FETCHTWEETS);

			if(loading) return <h1>Loading</h1>
			if(error) {
				console.log(error)
				return <h1>Error</h1>
			}
			console.log(data);

			return <span></span>
		}

    return (
        <Container>
					{GetTweets()}
        </Container>
    );
}
