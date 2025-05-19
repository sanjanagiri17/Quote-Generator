const quotes =[
    { 
        text : "Believe in yourself " , 
        author: "- Unknown",
         background: "bg1.jpg" 
    },
    { text : "Stay Positive , work hard " , 
        author: "- Unknown",
        background: "img2.jpg" 
    },
    { text : "Everyday is a new chance " , 
        author: "- Unknown",
        background: "img3.jpeg" 
    },
    { text : "Fortune favors the bold. " , 
        author: "– Virgil",
        background: "img4.jpg" 
    },
    { text : "I think, therefore I am." , 
        author: "– René Descartes",
        background: "img5.jpg " 
    },
    { text : "“I came, I saw, I conquered. " , 
        author: "– Julius Caesar",
        background: "img6.jpg" 
    }
];

const quoteText = document.getElementById("quote");
const auth = document.getElementById("auth");
const newQuote = document.getElementById("new-quote");
  function showRandomQuote(){
    const random = Math.floor(Math.random() * quotes.length);
    const selected=quotes[random];
    quoteText.innerText = selected.text;
    auth.innerText = selected.author;

    document.body.style.background = `url(${selected.background})`;
    document.body.style.backgroundSize='200% 200%';
    document.body.style.backgroundPosition='center';
    document.body.style.backgroundRepeat='no-repeat'


}

newQuote.addEventListener("click",showRandomQuote);

showRandomQuote();