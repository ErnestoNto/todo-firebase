import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 50px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fafafa;

    span{
        border: 1.5px solid #6622cc;
        border-radius: 1rem;
        padding: 4px 8px;
        letter-spacing: 1px;
    }

    button{
        padding: 8px 12px; 
        border-radius: 1rem;
        border: 0;
        background-color: #6622cc;
        color: #fafafa;
        cursor: pointer;
    }
`