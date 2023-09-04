import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea{
        width: 80% !important;
        height: 300px;
        border-radius: 8px;
        resize: none;
        outline: 0;
        padding: .8rem;
    }

    button{
        margin-top: 1rem;
        width: 80%;
        padding: 8px;
        background-color: #6622cc;
        color: #fafafa;
        border: 0;
        border-radius: 8px;
        font-size: 1.2rem;
    }
`