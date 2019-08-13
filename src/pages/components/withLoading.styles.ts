import styled from 'styled-components';

export const Overlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 3px solid indigo;
    border-radius: 50%;
    border-top-color: blueviolet;
    animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
