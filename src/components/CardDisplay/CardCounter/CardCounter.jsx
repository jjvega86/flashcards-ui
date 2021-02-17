import React from 'react';
import './CardCounter.css';

const CardCounter = (props) => {
    return(
        <div>
            <p>{props.currentCard + 1}/{props.collectionTotal}</p>
        </div>
    )
}

export default CardCounter;