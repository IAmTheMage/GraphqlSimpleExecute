import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import { Container } from './styles';
import {FETCHTWEETS} from './query';
import Tweet from '../Tweet';


export default function Tweets() {
		
		function GetTweets() {
			const {loading, error, data} = useQuery(FETCHTWEETS);

			if(loading) return <h1>Loading</h1>
			if(error) {
				return <h1>Error</h1>
			}

			return (
				<Fragment>
					{
						data.home.map(tweet => {
							return <Tweet key={tweet.id} data={tweet} />
						})
					}
				</Fragment>
			)
		}

    return (
        <Container>
					{GetTweets()}
        </Container>
    );
}
