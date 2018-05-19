//Computer picks random word to guess
(function(){
			
    //This code captures the keypress and prints it out on the screen
    var guessesLeft = 9;
    document.getElementById("guessesLeft").innerHTML = guessesLeft; 

          var getItem = function() {
      //Possible words to guess
      var words = ['passionfruit', 'perfect', 'halo', 'twentytwo', 'moments'];
      var possibleWord = words[Math.floor(Math.random() * words.length)];
      var spacedLetters = possibleWord.split(""); 
      console.log(spacedLetters) 
      
              //document.getElementById("letter").innerHTML = spacedLetters;
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
    };

    document.onkeypress = function(keyPressed) {
      var keyPressed = keyPressed || window.event,
          charCode = keyPressed.keyCode || keyPressed.which,
          lettersGuessed = String.fromCharCode(charCode);

      // var userGuess = prompt("What word do you guess?");
      // var userGuess = words.split('');
      // var userGuess
      // if (words.indexOf(userGuess) > -1) {
      //  alert("Your guess is correct.")
      // }else {
      //  alert("Your guess is wrong.")
      // }

      document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;

      guessesLeft--;

      if (guessesLeft === -1) {
        alert("You Lose!");
      }
  }
      getItem();
              
})();