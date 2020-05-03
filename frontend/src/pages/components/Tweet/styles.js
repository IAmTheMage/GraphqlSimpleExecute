import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    border-bottom: 0.5px solid #eee;
    padding-bottom: 10px;
`;

export const ImageContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    margin-top: 10px;
`;

export const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const Informations = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StaticInformations = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const AccountName = styled.span`
    font-size: 12px;
    font-weight: bold;
`;

export const Date = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #ccc;
    margin-left: 10px;
`;

export const TweetText = styled.span`
    font-size: 14px;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,"Comic Neue";
`;


export const IconsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 12px;
`;

export const GroupIconAndCount = styled.div`
    display: flex;
    align-items: center;
`; 

export const Count = styled.span`
    color: #ccc;
    font-size: 12px;
    margin-left: 8px;
`;