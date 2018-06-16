

$(document).ready(function() {



    // Click example
    $("#onClickEvent").on("click", function() {
        alert("text clicked!");
    });


    var randomIndexNumber = "";
    var hangmanWord = "";

    var wordArray = ["skywalker", "ewoks", "jedi", "naboo", "leia", "luke", "han","jabba", "obiwan", "vader", "empire", "xwing", "tifighter","tatooine","wookie","chewbacca","finn","rey", "yoda","ben","anakin"];
    function setHangmanWord() {
        randomIndexNumber = Math.floor(Math.random()*wordArray.length);
        hangmanWord = wordArray[randomIndexNumber];
        console.log(hangmanWord); // for DEV
    }

    setHangmanWord();

    var keyTyped = "";

    var keyTypedArray = [];
    var correctLetterArray = [];
    var incorrectLetterArray = [];
    var isLetterCorrect = false;


    function buildLetterArray(key) {
        keyTypedArray.push(key);
    }

    // whenever user presses a key, convert it to a letter stored in keyTyped
    $("#onKeyUp").keypress(function(keyPressEvent) {


        // stores the key pressed as keyTyped
        var keyTypedNumber = keyPressEvent.which;
        keyTyped = String.fromCharCode(keyTypedNumber);
        console.log(keyTyped);

        
        if ((keyTypedNumber < 97) || (keyTypedNumber > 122)) {
            // don't do anything
            alert("please type a lowercase letter");
        } else {
            // do a bunch of stuff
            buildLetterArray(keyTyped);
            console.log("key typed and lowercase: " + keyTypedArray);

            //

            for (n=0; n<hangmanWord.length; n++) { //go through computer generated word letters
                //arrayAnswer
                for (j=0; j<correctLetterArray.length; j++){ //go through array of correct chosed letters

                    //if letter already chosen dont check again
                    // else if letter not already chosen - compare letter with correct remaining letters
                    if (keyTyped === hangmanWord[n]) { //if key typed add to correct letter array
                        // put into correctLetterArray
                        correctLetterArray.push(keyTyped);
                        console.log("if is true and letter matches in computor arry:  " + correctLetterArray);
                        return //stop once a correct letter is matched
                        
                    } else {
                        // put into incorrectLetterArray
                        incorrectLetterArray.push(keyTyped);
                        console.log("else letter chosen not correct " + incorrectLetterArray);
                    }
                 }        
                 
                 //add code add in incorrect list or check hangmanword array again
    
            }
            
            console.log("after loop " + correctLetterArray); 

            
        }


    });

    







});








    

