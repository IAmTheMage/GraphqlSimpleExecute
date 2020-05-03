import React, {Fragment, useEffect} from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import { FiMessageCircle, FiShare } from 'react-icons/fi';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import {fromUnixTime} from 'date-fns';
import { Container, ImageContainer, ProfileImage,
    Informations, StaticInformations, AccountName,Date,
    TweetContainer,TweetText, IconsContainer, GroupIconAndCount,
    Count
} from './styles';

export default function Tweet({data}) {

    useEffect(() => {
        const formatDate = fromUnixTime(data.created_at)
        console.log(formatDate);
    }, [])

    return (
        <Container>
            <ImageContainer>
                <ProfileImage src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            </ImageContainer>
            <TweetContainer>
                <Informations>
                    <StaticInformations>
                        <AccountName>{data.user.name}</AccountName>
                        <Date>{data.created_at}</Date>
                    </StaticInformations>
                    <IoIosArrowDown style={{
                        marginTop: 10,
                        marginRight: 10
                    }} size={15}></IoIosArrowDown>
                </Informations>
                <TweetText>
                    {data.tweet}
                </TweetText>
                <IconsContainer>
                    <GroupIconAndCount>
                        <FiMessageCircle size={16} color="#ccc"></FiMessageCircle>
                        <Count>0</Count>
                    </GroupIconAndCount>
                    <GroupIconAndCount>
                        <AiOutlineRetweet size={16} color="#ccc"></AiOutlineRetweet>
                        <Count>0</Count>
                    </GroupIconAndCount>
                    <GroupIconAndCount>
                        <AiOutlineHeart size={16} color="#ccc"></AiOutlineHeart>
                        <Count>0</Count>
                    </GroupIconAndCount>
                    <GroupIconAndCount>
                        <FiShare size={16} color="#ccc"></FiShare>
                        <Count>0</Count>
                    </GroupIconAndCount>
                </IconsContainer>
            </TweetContainer>
        </Container>
    )
}
