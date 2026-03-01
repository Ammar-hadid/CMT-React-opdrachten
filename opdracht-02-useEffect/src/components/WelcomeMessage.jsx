import { useState, useEffect } from 'react';

const WelcomeMessage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        let newMessage = '';

        if (hours >= 6 && hours < 12) {
            newMessage = 'Goedemorgen'
        }
        else if (hours >= 12 && hours <= 18) {
            newMessage = 'Goedemiddag'
        }
        else {
            newMessage = 'Goedenacht'
        }

        setMessage(newMessage);
    });

    return <h1>{message}</h1>
}

export default WelcomeMessage;