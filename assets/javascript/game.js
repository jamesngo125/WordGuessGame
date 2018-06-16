

$(document).ready(function() {



    // Click example
    $("#onClickEvent").on("click", function() {
        alert("text clicked!");
    });


    var wordArray = ["skywalker", "ewoks", "jedi", "naboo", "leia", "luke", "han","jabba", "obiwan", "vader", "empire", "xwing", "tifighter","tatooine","wookie","chewbacca","finn","rey", "yoda","ben","anakin"];
    function setHangmanWord() {
        var randomIndexNumber = Math.floor(Math.random()*wordArray.length);
        var hangmanWord = wordArray[randomIndexNumber];
        console.log(hangmanWord); // for DEV
    }

    setHangmanWord();

    var keyTypedArray = [];
    var keyTyped = "";

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
            console.log(keyTypedArray);
        }


    });

    







});








    

