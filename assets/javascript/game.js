

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

    // whenever user presses a key, convert it to a letter stored in keyTyped
    function whenKeyPressed() {

        // key is pressed
        $("#onKeyUp").keypress(function(keyPressEvent) {

            var keyTypedNumber = keyPressEvent.which;
            console.log(keyTypedNumber);
            

            if ((keyTypedNumber < 97) || (keyTypedNumber > 122)) {
                // don't do anything
                alert("please type a lowercase letter");
            } else {
                // do a bunch of stuff
                var keyTyped = String.fromCharCode(keyTypedNumber);
                console.log(keyTyped);
            }


        });

    }

    whenKeyPressed();






});








    

