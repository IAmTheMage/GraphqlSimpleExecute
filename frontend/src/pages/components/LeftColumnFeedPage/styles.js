import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    
`;

export const ContentContainer = styled.div`
    margin-left: 40%;
    margin-top: 5px;
    align-items: center;
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

export const NavigationContainer = styled.div`
    display: flex;
    margin-top: 2px;
    align-items: center;
    margin-left: 5px;
    padding: 0;
`;

export const NavigationItem = styled.h2`
    font-size: 14px;
    color: ${props => props.color || '#000'};
    margin-left: 10px;
`;

export const TweetButton = styled.button`
    color: white;
    background: #1da1f2;
    border: 0;
    padding: 12px 5px;
    border-radius: 25px;
    width: 80%;
    margin-right: 10px;
    font-weight: bold;
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    bottom: 10px;
    position: absolute;
`;

export const ProfileImage = styled.img`
    border-radius: 100px;
    width: 30px;
    height: 30px;
`;

export const ProfileName = styled.h4`
    font-size: 14px;
    color: black;
    margin: 0 10px;
`;