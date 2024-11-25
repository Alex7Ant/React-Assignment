// Import React library
import React from 'react';

const Header = ({message}) => {
    return(
        <div className="text-3xl font-bold underline text-white-50 bg-blue-500">
            {message}
        </div>
    )
};

export default Header;