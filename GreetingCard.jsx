import React from 'react';

const GreetingCard = ({title,message}) => {
    return(
        <div className="text-3xl font-bold text-white-50 bg-blue-500 flex-center-">
            <h1>{title}</h1>
            <p className = "">{message}</p>

        </div>
    );
};

// Display the card 
export default GreetingCard;
