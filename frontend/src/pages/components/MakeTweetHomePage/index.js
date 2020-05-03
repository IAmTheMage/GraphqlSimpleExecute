import React, {useState, useEffect} from 'react';
import { useMutation } from '@apollo/react-hooks';
import {AiOutlinePicture, AiOutlineGif} from 'react-icons/ai';
import {RiBarChartHorizontalLine} from 'react-icons/ri';
import {FaRegSmile} from 'react-icons/fa';
import { Container, ProfileImageContainer, ProfileImage,
    Content, Input, SubInputRow, IconsContainer,
    SubmitButton
} from './styles';
import {CREATETWEET} from './mutation';


export default function MakeTweetHomePage() {
    const [tweet,setTweet] = useState("");
    const [submitButtonOpacity, setSubmitButtonOpacity] = useState(0.7);

    useEffect(() => {
        watchTweet();
    }, [tweet])

    function watchTweet() {
        if(tweet.length > 0) {
            setSubmitButtonOpacity(1)
        }
    }

    function Tweet() {
        const [createTweet] = useMutation(CREATETWEET);
        return (
            <Content>
                <Input onChange={(e) => setTweet(e.target.value)} placeholder="O que está acontecendo?"></Input>
                <SubInputRow>
                    <IconsContainer>
                        <AiOutlinePicture size={20} color="#1da1f2"></AiOutlinePicture>
                        <AiOutlineGif size={20} color="#1da1f2"></AiOutlineGif>
                        <RiBarChartHorizontalLine size={20} color="#1da1f2"></RiBarChartHorizontalLine>
                        <FaRegSmile size={20} color="#1da1f2"></FaRegSmile>
                    </IconsContainer>
                    <SubmitButton onClick={async (e) => {
                        await createTweet({
                            variables: {
                                tweet
                            }
                        })
                    }} opacity={submitButtonOpacity}>
                        Tweetar
                    </SubmitButton>
                </SubInputRow>
            </Content>
        )
    }

    return (
        <Container>
            <ProfileImageContainer>
                <ProfileImage src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            </ProfileImageContainer>
            {Tweet()}
        </Container>
    );
}
