import React from 'react';

import '../index.css';
import headerImage from '../../../portfolioirene/src/assets/images/header.jpeg';

const header = () => {
    return(
        <header className="w-full">
            <img className="w-full h-96 object-cover" src={headerImage} alt="Header Image"/>
        </header>
    )
};

export default header;