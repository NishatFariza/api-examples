//parameter bihin arrow function
const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))

}

const displayQuote = quote =>{
    // console.log(quote.qoute);
    const quoteElement =document.getElementById('quote');
    quoteElement.innerText= quote.quote;

}