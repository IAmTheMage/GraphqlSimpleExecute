import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const FormLogo = styled.img`
    width: 50px;
    height: 50px;
`;

export const FormTitle = styled.h1`
    font-size: 20px;
    color: #222;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,"Comic Neue";
    font-weight: bold;
`;


export const InputContainer = styled.div`
    width: 35%;
    background-color: #f5f8fa;
    border-bottom: 1px solid #666;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px 5px 0px 5px;
    height: 40px;
`;

export const InputDescription = styled.span`
    font-size: 12px;
    color: #888;
    font-weight: normal;
    height: 20px;
    margin-left: 5px;
`;

export const Input = styled.input`
    width: 98%;
    margin-left: 0px;
    background: transparent;
    border: 0;
    margin-left: 5px;
    padding: 5px;

    &::selection {
        border: 0;
    }
`;

export const SubmitContainer = styled.div`
    width: 36%;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px 10px;
    border-radius: 15px;
    margin: 0;
    margin-top: 10px;
    background: #1da1f2;
    border: 0;
    color: white;
    opacity: ${props => props.enabled ? 1 : 0.45};
`;

export const LinkToSignUpPage = styled.span`
    color: #1da1f2;
    font-size: 13px;
    margin-top: 6px;
    opacity: 1;
    cursor: pointer;
`;