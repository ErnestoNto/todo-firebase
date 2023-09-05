import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #6622cc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        color: #fafafa;
        font-size: 2rem;
        letter-spacing: 1px;
    }
`

export const Form = styled.form`
    margin-top: 1rem;
    width: 400px;
    min-height: 300px;
    padding: 12px;
    background-color: #fafafa;
    border-radius: 4px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 20px #0f0f0f;

    input{ 
        width: 80%; 
        padding: 10px;
        font-size: 1.1rem;
        border: 1px solid transparent;
        outline: 0;
    }

    button{  
        width: 80%; 
        padding: 10px;
        font-size: 1.1rem;
        border: 0;
        background-color: #3918a9;
        color: #fafafa;
        border: 1px solid transparent;
        cursor: pointer; 
        transition: all ease-in-out .3s;

        &:hover{
            border-color: #3918a9;
            color: #3918a9;
            background-color: #fafafa;
        }
    }

    a{
        text-decoration: none;
        color: #000;

        &:hover{
            text-decoration: underline;
        }
    }

    .input_error{
        border-color: #ff0045;
    }

    .error_message{
        color: #ff0045;
        font-size: .8rem;
    }

    .loading{
        &::after{
            content: ' ';
            animation: elipse 2s infinite;
        }
    }

    @keyframes elipse {
        0% {content: '.';}
        33% {content: '..';}
        66% {content: '...';}
    }
`