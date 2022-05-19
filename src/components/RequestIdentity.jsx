/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

// https://dog.ceo/api/breeds/image/random
// https://official-joke-api.appspot.com/random_joke

export default function RequestIdentity() {
    const [answer, setAnswer] = useState();
    const [, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setAnswer(data.message);
                setIsLoading(false);
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            <p>{isLoading && 'Loading...'}</p>
            <div><img src={answer} style={{width: "800px", height:"800px"}}/></div>
        </div>
    )
}