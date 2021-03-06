import styled from 'styled-components';
import {Form, Field} from 'formik';

export const Error = styled.p`
    color: red;
    text-align: left;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
`;

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    width: 17%;
    background: #F5F5F5;
    padding: 1.5rem;
    border: 1px solid black;
    box-shadow: 5px 5px 3px 0px rgba(40,40,40,0.75);
    button{
        margin: 1rem auto 0 auto;
        width: 50%;
        background: #18E2B5;
        border: 1px solid #000000;
        border-radius: 10px;
        padding: 8px 20px;
        color: #ffffff;
        display: inline-block;
        font: normal bold 1rem/1 "Montserrat", sans-serif;
        text-align: center;
        text-shadow: 1px 1px #000000;
        outline: none;
        cursor: pointer;
        &:active {
            background: #ffffff;
            color: #18E2B5;
            border: 1px solid #18E2B5;
            text-shadow: 1px 1px #000000;
        }
    }
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    text-align: left;
    padding: .8rem 0;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1.3rem;
`;

export const UserField = styled(Field)`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    
`;

export const Term = styled.label`
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    padding: .8rem 0;
    font-weight: bold;
    text-decoration:none;
    margin: 1rem auto 0 auto;
`;

export const Card = styled.div`
    border-radius: 10px;
    background: #F5F5F5;
    width: 20%;
    margin: 2rem auto;
    padding: .5rem 1.5rem; 1rem 0;
    border: 1px solid black;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(40,40,40,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(40,40,40,0.75);
    box-shadow: 10px 10px 5px 0px rgba(40,40,4040,40,40,0.75);
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    h1{
        text-align: center;
        text-decoration: underline;
    }
`;