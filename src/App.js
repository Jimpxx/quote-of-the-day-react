import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    function getQuote() {
        axios
            .get('https://quotes.rest/qod')
            .then((res) => {
                console.log(res);
                setQuote(res.data.contents.quotes[0].quote);
                setAuthor(res.data.contents.quotes[0].author);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="App">
            <h1>Quote of the Day</h1>
            <p>{quote}</p>
            <p>- {author}</p>
            <button onClick={getQuote}>Quote</button>
        </div>
    );
}

export default App;
