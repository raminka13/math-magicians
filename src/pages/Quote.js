import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [quotes, setQuote] = useState({
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester'
  });

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
        <h3 className="quote">&quot;{quotes.quote}&quot;</h3>
        <h5 className="author">{quotes.author}</h5>
        <button type="button" onClick={updateQuote} className="generateQuotes">
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
