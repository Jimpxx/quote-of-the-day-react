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
            <div className="header">
                <h1>Quote of the Day</h1>
                <button onClick={getQuote}>Get Quote</button>
            </div>
            <div className="quote">
                <p>{quote}</p>
                {quote ? <p className="author">- {author}</p> : <p></p>}
            </div>
        </div>
    );
}

export default App;
