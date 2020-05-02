import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    border-bottom: 8px solid #eee;
`;

export const ProfileImageContainer = styled.div`
    width: 10%;
    height: 100%;
`;

export const ProfileImage = styled.img`
    width: 35px;
    height: 35px;
    margin-top: 10px;
    border-radius: 100px;
    margin-left: 15px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
`;

export const Input = styled.input`
    border: 0;
    width: 100%;
    padding: 5px 0;
    color: #333;
    margin-top: 15px;
    font-size: 15px;
    outline-width: 0;
    margin-left: 15px;

    &::placeholder {
        color: #bbb;
    }
`;

export const SubInputRow = styled.div`
    display: flex;
    margin-left: 15px;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
`;

export const IconsContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`;

export const GifContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1da1f2;
    width: 20px;
    height: 10px;
    margin-top: 10px;
`;

export const SubmitButton = styled.button`
    color: white;
    font-weight: bold;
    border: 0;
    width: 20%;
    background-color: #1da1f2;
    border-radius: 25px;
    margin-right: 15px;
    padding: 7px 5px;
    opacity: ${props => props.opacity}
`;