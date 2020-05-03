import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40%;
    width: 100%;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 70%;
    padding: 5px;
    margin-top: 10px;
    border-radius: 20px;
    height: 25px;
    background: #e6ecf0;
    margin-left: 20px;
    align-items: center;
`;

export const SearchInput = styled.input`
    color: #666;
    font-size: 12px;
    height: 100%;
    width: 100%;
    border: 0;
    background: transparent;
    margin-left: 10px;
`;

export const TopicsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    background: #f5f8fa;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 20px;
`;

export const TopicsDescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0 5px;
    align-items: center;
    justify-content: space-between;
`;

export const TopicsTitle = styled.h1`
    font-size: 15px;
    color: black;
    margin-left: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const TopicContent = styled.div`
    border-top: .5px solid #ccc;
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;

    svg {
        margin-right: 8%;
    }
`;

export const StaticContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-left: 5%;
    
`;

export const MomentTopicStaticDescription = styled.span`
    font-size: 10px;
    color: #bbb;
`;

export const Topic = styled.h3`
    color: black;
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 5%;
`;

export const TopicTweetCount = styled.h6`
    color: #999;
    margin-top: 0;
    font-size: 12px;
    font-weight: normal;
    margin-left: 5%;
`;

export const MoreContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
    border-top: .5px solid #ccc;
`;

export const More = styled.span`
    margin-left: 5%;
    font-size: 14px;
    color: #1da1f2;
`;