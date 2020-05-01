import styled from 'styled-components';

export const Container = styled.div`
    width: 25%;
`;

export const ContentContainer = styled.div`
    margin-left: 35%;
    margin-top: 20px;
    align-items: center;
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

export const NavigationContainer = styled.div`
    display: flex;
    margin-top: 5px;
    align-items: center;
    margin-left: 5px;
`;

export const NavigationItem = styled.h2`
    font-size: 15px;
    color: ${props => props.color || '#000'};
    margin-left: 5px;
`;
