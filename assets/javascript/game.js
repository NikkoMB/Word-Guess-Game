 //Array that will show off the words// 
 var word = ["one dance","single ladies","perfect", "shake it off", "what makes you beautiful"]; 
    console.log(word)
   
   
//This will randomly pick a word from the array
    var randomItem = word[Math.floor(Math.random()*word.length)];

    document.body.innerHTML = randomItem;

 
