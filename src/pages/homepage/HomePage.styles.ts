import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 1rem;
`;

export const Preview = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 15rem;
    height: 20rem;
    border: 1px solid black;
    margin: 1rem;
    transition: transform 0.3s ease-in-out;
    span {
        font-weight: bold;
    }
    :hover {
        transform: scale(1.03);
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
`;

export const Photo = styled.img`
    width: 10rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 1rem;
`;
