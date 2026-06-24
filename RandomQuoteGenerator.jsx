// import React, { useState } from 'react'

// const RandomQuoteGenerator = () => {
//     var quotes=["Be yourself; everyone else is already taken.",
//         "The only way out is through.",
//         "Life is 10% what happens to me and 90% of how I react to it." ,
//         "Comparison is the thief of joy.",
//         "Life goes on." ,
//         "You miss 100% of the shots you don't take.",
//         "Be so good they can't ignore you.",
//         "Turn your wounds into wisdom.",
//         "A happy soul is the best shield for a cruel world." ,
//         "If you don't like the road you're walking, start paving another one.",
//         "No problem can be solved from the same level of consciousness that created it." ,
//         "In a gentle way, you can shake the world." ,
//         "Everything you want is on the other side of fear." ,
//         "Action eliminates doubt." ,
//         "Every moment is a fresh beginning."]

//         const [quote, setQuote]=useState(quotes[0])
//         const generateQuote=()=>{
//             const randomIndex=Math.floor(Math.random()*quotes.length)
//             setQuote(quotes[randomIndex])
//         }
//   return (

//     <div style={{backgroundColor:"orange"}}>
//         <h1>
//             RandomQuoteGenerator
//         </h1>
//         <p style={{backgroundColor:"lightblue"}}>{quote}</p>
//         <button onClick={generateQuote}>Generate quote</button>
//     </div>
//   )
// }

// export default RandomQuoteGenerator


import React, { useState } from "react";
import "./RandomQuoteGenerator.css";

const RandomQuoteGenerator = () => {
  const quotes = [
    "Be yourself; everyone else is already taken.",
    "The only way out is through.",
    "Life is 10% what happens to me and 90% of how I react to it.",
    "Comparison is the thief of joy.",
    "Life goes on.",
    "You miss 100% of the shots you don't take.",
    "Be so good they can't ignore you.",
    "Turn your wounds into wisdom.",
    "A happy soul is the best shield for a cruel world.",
    "If you don't like the road you're walking, start paving another one.",
    "No problem can be solved from the same level of consciousness that created it.",
    "In a gentle way, you can shake the world.",
    "Everything you want is on the other side of fear.",
    "Action eliminates doubt.",
    "Every moment is a fresh beginning."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <div className="quote-card">
        <h1>🌸 Random Quote Generator 🌸</h1>

        <p className="quote-text">
          "{quote}"
        </p>

        <button onClick={generateQuote}>
          ✨ Generate Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
