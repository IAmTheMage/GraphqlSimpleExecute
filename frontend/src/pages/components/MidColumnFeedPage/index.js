import React from 'react';
import { Container } from './styles';
import Header from '../MidColumnFeedPageHeader';
import MakeTweet from '../MakeTweetHomePage';
import Tweets from '../Tweets';


export default function MidColumnFeedPage({data}) {
  return (
    <Container>
        <Header pageName={data.pageName}/>
        <MakeTweet />
        <Tweets></Tweets>
    </Container>
  );
}
