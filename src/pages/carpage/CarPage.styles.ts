import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    span {
        margin: 1rem;
        font-weight: bold;
        font-size: 1.2rem;
    }
    button {
        cursor: pointer;
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        :hover {
            background-color: palevioletred;
            color: white;
        }
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    color: palevioletred;
`;
