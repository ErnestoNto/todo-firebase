import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 80% !important;
    height: 300px;
    border-radius: 8px;
    resize: none;
    outline: 0;
    padding: 0.8rem;
  }

  button {
    margin-top: 1rem;
    width: 80%;
    padding: 12px;
    background-color: #6622cc;
    color: #fafafa;
    border: 0;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Tasks = styled.section`
        margin-top: 1rem;
        width: 90%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        
        p{
            width: 80%;
            background-color: #fafafa;
            padding: 1rem;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
    
            .controls{
                display: flex;
                gap: 8px;

                & > :nth-child(1){
                    background-color: #c38eb4;
                    color: #fafafa;
                }

                & > :nth-child(2){
                    background-color: #26425a;
                    color: #fafafa;
                }
            }

            button{
                padding: 4px;
                border: 0;
                border-radius: 8px;
                cursor: pointer;
                transition: all ease-in-out .3s;

                &:hover{
                    transform: scale(1.2) rotate(20deg);
                }
            }
        }
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
`;
