import {gql} from 'apollo-boost';


export const CREATETWEET = gql`
	mutation CreateTweet($tweet: String!) {
			CreateTweet(tweet: $tweet) {
					id
					tweet
			}
	}
`;