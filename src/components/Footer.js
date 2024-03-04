import React, { useState } from 'react';

function Footer() {
    const [inputValue, setInputValue] = useState('');

    const isEmail = () => {
        
        if (!inputValue.includes("@")) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
        } 
    };
        
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div>
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => isEmail()} // Fixed onBlur event handler
                />
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
        </footer>
    );
}

export default Footer;
