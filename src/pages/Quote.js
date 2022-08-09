import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [quotes, setQuote] = useState('');

  const updateQuote = async () => {
    const res = await fetch('https://random-math-quote-api.herokuapp.com/');

    res
      .json()
      .then((res) => {
        setQuote({
          quote: res.quote,
          author: res.author,
        });
      })
      .catch();
  };

  return (
    <div className="quoteContainer">
      <div className="quoteWrapper">
        <h3 className="quote">{quotes.quote}</h3>
        <h5 className="author">{quotes.author}</h5>
        <button type="button" onClick={updateQuote} className="generateQuotes">
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;