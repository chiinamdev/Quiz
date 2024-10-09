import React from 'react';
import styled from 'styled-components'

const StyleCard = styled.div`
    background-color: yellow;
    width: 200px;
    height: 50px;
    margin: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;



const Card = () => {
    return (
        <StyleCard>
            <h1>Card</h1>
        </StyleCard>
    );
};

export default Card;