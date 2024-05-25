
var output = document.getElementById("output")

var quotes = [
 '“Be yourself; everyone else is already taken.”― Oscar Wilde',
'“So many books, so little time.”― Frank Zappa',
'“A room without books is like a body without a soul.”― Marcus Tullius Cicero',
'“You only live once, but if you do it right, once is enough.”― Mae West',
'“In three words I can sum up everything I have learned about life: it goes on.”― Robert Frost',
];


function randomQuote(){
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
output.innerHTML = randomQuote;
  }





