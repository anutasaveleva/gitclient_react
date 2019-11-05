import styled from 'styled-components';

export const Container = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    flex-direction: column;
    `;

export const SButton = styled.button`
    width: 300px;
    height: 15%;
    margin: 10px 10px;
    display: flex;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: cornflowerblue;
    justify-content: center;
    color: white;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    width: 592px;
    font-family: Roboto serif;
    font-style: normal;
    font-weight: 200;
    font-size: 48px;
    text-align: center;

    color: #333333;`;

export const InputContainer = styled.input`
    width: 300px;
    height: 15%;
    margin: 10px 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;`;

export const MyForm = styled.div`
    margin-top: 100px;
    display: flex;
    
    flex-direction: column;
    width: 337px;
    height: 278px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 18px;`;
