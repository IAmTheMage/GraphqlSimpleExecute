import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { BsGear } from 'react-icons/bs';
import { Container, ContentContainer,
    InputContainer, SearchInput,
    TopicsContainer, TopicsDescriptionContainer,
    TopicsTitle, TopicContent, StaticContainer, 
    MomentTopicStaticDescription, Topic, TopicTweetCount
} from './styles';


export default function RightColumnFeedPage() {
  return (
    <Container>
        <ContentContainer>
            <InputContainer>
                <AiOutlineSearch size={16} color="b5c0c8" style={{marginLeft: 10}} />
                <SearchInput placeholder="Buscar no Twitter"></SearchInput>
            </InputContainer>
            <TopicsContainer>
                <TopicsDescriptionContainer>
                    <TopicsTitle>Assuntos para você</TopicsTitle>
                    <BsGear style={{marginRight: 10}} color="#1da1f2" size={14}/>
                </TopicsDescriptionContainer>
                <TopicContent>
                    <StaticContainer>
                        <MomentTopicStaticDescription>Assunto do momento em Brasil</MomentTopicStaticDescription>
                        <IoIosArrowDown size={15} color="#bbb"></IoIosArrowDown>
                    </StaticContainer>
                    <Topic>Amoedo</Topic>
                    <TopicTweetCount>40.5 mil Tweets</TopicTweetCount>
                </TopicContent>
            </TopicsContainer>
        </ContentContainer>
    </Container>
  );
}
