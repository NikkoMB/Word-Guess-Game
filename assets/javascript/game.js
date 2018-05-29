//Computer picks random word to guess
(function(){
    //Global var        
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var guessesLeft = 9;

    //Possible words to guess
    var words = ['passionfruit', 'perfect', 'halo', 'twentytwo', 'moments'];
    var possibleWord = words[Math.floor(Math.random() * words.length)];
    var spacedLetters = possibleWord.split(""); 
    console.log(spacedLetters) 

    document.getElementById("guessesLeft").innerHTML = guessesLeft; 

    
      document.getElementById("letter").innerHTML = spacedLetters;
      //Space out possibleWord
      var originalLength = possibleWord.length;
      for (i = 0; i < originalLength; i++) {
          possibleWord = [possibleWord.slice(0, i*2+1), ' ', possibleWord.slice(i*2+1)].join('');
      }
      
      //Displays possible words blank spaces
      var blankSpaces = "";
      var wordLength = possibleWord.length;


      for (i = 0; i < wordLength; i++) {
        var x = possibleWord.charAt(i);

        if(x === " " || x === "/'")
        {
          blankSpaces += x;
        }
        else {
          blankSpaces += "_";
        }
      }
      document.getElementById("blankSpaces").innerHTML = blankSpaces;


    



    document.onkeypress = function(keyPressed) {
        charCode = keyPressed.keyCode || keyPressed.which,
        lettersGuessed = String.fromCharCode(charCode);
        console.log(lettersGuessed) 


// index of to check if letter is in word
// check lower case to lower case.
// if -1 then not in word put in wrong guess list
// else loop thru word to find ever instance of letter (like if I guess S for passion fruit)



        console.log("guess word:", spacedLetters)
        for (i = 0; i <wordLength; i++){
            if (words[i] === lettersGuessed){
                spacedLetters[i] === lettersGuessed;
                document.getElementById("blankSpaces").innerHTML = blankSpaces;
                console.log(spacedLetters)
            }
        
        }
      

      document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;


  
  }
  console.log(words)
  console.log(possibleWord)
              
})();