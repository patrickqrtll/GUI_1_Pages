/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *
 * http://stackoverflow.com/questions/11590516/jquery-draggable-droppable-with-table
 * http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript
 */

//All letter are A's for now. Also only letters A - O
//Possibly add "in play" value to check if letter is being used.

function checkForTriple(word)
{

}

$(document).ready(function () {

    //Init UI
    $('.scrabbleScore').html(scrabbleSum);// 0
    $('.wordScore').html(wordSum); // 0
    $('.currentWord').html(strWord); // ---
    errorMessage(CLR);
    dragAndDrop();
    
    //Most of the magic is here
    function dragAndDrop() {

        $(".boardSpaceCR").droppable({
            drop: function (e, ui) {
                $(this).append(ui.draggable);
                itemId = $(ui.draggable).attr("id");
                var letter;
                //get some info about the placed piece
                errorMessage(CLR);
                letter = getLetterFromId(itemId);
                centerFlag = 1;

                if (checkCenter())
                {
                    //if you already put this piece in play
                    if (document.getElementById(itemId).classList.contains("inPlay"))
                    {
                        if (document.getElementById(itemId).classList.contains("doubleLetter")) // check if it had a double letter flag class
                        {
                            wordSum -= scrabbleTiles[letter].value; // remove the double
                            $('.wordScore').html(wordSum);
                            document.getElementById(itemId).classList.remove("doubleLetter"); // remove double letter
                        }
                        if (document.getElementById(itemId).classList.contains("tripleWord")) // check if it had a double letter flag class
                        {
                            $('.wordScore').html(wordSum);
                            document.getElementById(itemId).classList.remove("tripleWord"); // remove tripleWord
                            tripleWordFlag = 0;
                            tripleWordScore = 0;
                        }
                    }
                    //if the letter is not in play, set it in play, add to word score.
                    else
                    {
                        document.getElementById(itemId).className += " inPlay";
                        wordSum += scrabbleTiles[letter].value;
                        $('.wordScore').html(wordSum);
                        errorMessage(CLR);
                    }

                    // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

                    var $row = $(this).closest("tr");  // Find the row
                    var $tds = $row.find("td"); // find tds
                    var numCharsHTML = ""; // distance to .png tag
                    var letterHTML = ""; // the string given by .html() function
                    var keyedLetters = ""; // string with keyed letters for parsing later
                    var arrayLetters = "";

                    $.each($tds, function () {

                        // building a string to parse later to see if letters are next to eachother
                        letterHTML = $(this).html();
                        numCharsHTML = letterHTML.search(".png"); //Find where .png is, this is end of url
                        if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
                            keyedLetters += "%";
                        else
                            keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML); // Determine letter based on end .png
                    });

                    arrayLetters = keyedLetters.split("");
                    checkRow(arrayLetters);
                    $('.currentWord').html(strWord);

                    if (tripleWordFlag == 1)
                    {
                        tripleWordSum = wordSum * 3;
                        $('.wordScore').html(tripleWordSum);
                    }
                    errorMessage(CLR);
                }
            }
        });

        $(".boardSpace").droppable({
            drop: function (e, ui) {
                $(this).append(ui.draggable);
                itemId = $(ui.draggable).attr("id");
                var letter;
                //get some info about the placed piece
                letter = getLetterFromId(itemId);
                errorMessage(CLR);
                
                if (checkCenter())
                {
                    //if you already put this piece in play
                    if (document.getElementById(itemId).classList.contains("inPlay"))
                    {
                        if (document.getElementById(itemId).classList.contains("doubleLetter")) // check if it had a double letter flag class
                        {
                            wordSum -= scrabbleTiles[letter].value; // remove the double
                            $('.wordScore').html(wordSum);
                            document.getElementById(itemId).classList.remove("doubleLetter"); // remove double letter
                        }
                        if (document.getElementById(itemId).classList.contains("tripleWord")) // check if it had a double letter flag class
                        {
                            $('.wordScore').html(wordSum);
                            document.getElementById(itemId).classList.remove("tripleWord"); // remove tripleWord
                            tripleWordFlag = 0;
                            tripleWordScore = 0;

                        }
                    }
                    //if the letter is not in play, set it in play, add to word score.
                    else
                    {
                        document.getElementById(itemId).className += " inPlay";
                        wordSum += scrabbleTiles[letter].value;
                        $('.wordScore').html(wordSum);
                        errorMessage(CLR);
                    }

                    // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

                    var $row = $(this).closest("tr");  // Find the row
                    var $tds = $row.find("td"); // find tds
                    var numCharsHTML = ""; // distance to .png tag
                    var letterHTML = ""; // the string given by .html() function
                    var keyedLetters = ""; // string with keyed letters for parsing later
                    var arrayLetters = "";

                    $.each($tds, function () {

                        // building a string to parse later to see if letters are next to eachother
                        letterHTML = $(this).html();
                        numCharsHTML = letterHTML.search(".png"); //Find where .png is, this is end of url
                        if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
                            keyedLetters += "%";
                        else
                            keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML); // Determine letter based on end .png
                    });

                    arrayLetters = keyedLetters.split("");
                    checkRow(arrayLetters);
                    $('.currentWord').html(strWord);

                    if (tripleWordFlag == 1)
                    {
                        tripleWordSum = wordSum * 3;
                        $('.wordScore').html(tripleWordSum);
                    }
                }
            }
        });

        $(".boardSpaceDL").droppable({
            drop: function (e, ui) {
                $(this).append(ui.draggable);
                itemId = $(ui.draggable).attr("id");
                var letter;
                errorMessage(CLR);

                //get some info about the placed piece
                letter = getLetterFromId(itemId);

                if (checkCenter())
                {
                    //if you already put this piece in play
                    if (document.getElementById(itemId).classList.contains("inPlay"))
                    {
                        document.getElementById(itemId).className += " doubleLetter"; // add double letter flag class
                        wordSum += scrabbleTiles[letter].value; // add letter again, already in play so only need to add one more time
                        $('.wordScore').html(wordSum);
                        errorMessage(CLR);
                    }
                    //if the letter is not in play, set it in play, add DOUBLE letter to word score.
                    else
                    {
                        document.getElementById(itemId).className += " inPlay";
                        document.getElementById(itemId).className += " doubleLetter"; // add flag class
                        wordSum += (2 * scrabbleTiles[letter].value);
                        $('.wordScore').html(wordSum);
                        errorMessage(CLR);
                    }

                    // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

                    var $row = $(this).closest("tr");  // Find the row
                    var $tds = $row.find("td"); // find tds
                    var numCharsHTML = ""; // distance to .png tag
                    var letterHTML = ""; // the string given by .html() function
                    var keyedLetters = ""; // string with keyed letters for parsing later
                    var arrayLetters = "";

                    $.each($tds, function () {

                        // building a string to parse later to see if letters are next to eachother
                        letterHTML = $(this).html();
                        numCharsHTML = letterHTML.search(".png"); //Find where .png is, this is end of url
                        if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
                            keyedLetters += "%";
                        else
                            keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML); // Determine letter based on end .png
                    });


                    arrayLetters = keyedLetters.split("");

                    checkRow(arrayLetters);
                    $('.currentWord').html(strWord);

                    if (tripleWordFlag == 1)
                    {
                        tripleWordSum = wordSum * 3;
                        $('.wordScore').html(tripleWordSum);
                    }
                }
            }
        });

        $(".boardSpaceTW").droppable({
            drop: function (e, ui) {
                $(this).append(ui.draggable);
                itemId = $(ui.draggable).attr("id");
                var letter;
                errorMessage(CLR);

                //get some info about the placed piece
                letter = getLetterFromId(itemId);

                if (checkCenter())
                {
                    //if you already put this piece in play
                    if (document.getElementById(itemId).classList.contains("inPlay"))
                    {
                        document.getElementById(itemId).className += " tripleWord"; // add double letter flag class
                        errorMessage(CLR);
                    }
                    //if the letter is not in play, set it in play, add DOUBLE letter to word score.
                    else
                    {
                        document.getElementById(itemId).className += " inPlay";
                        document.getElementById(itemId).className += " tripleWord"; // add flag class
                        wordSum += scrabbleTiles[letter].value;
                        errorMessage(CLR);
                    }

                    // http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click

                    var $row = $(this).closest("tr");  // Find the row
                    var $tds = $row.find("td"); // find tds
                    var numCharsHTML = ""; // distance to .png tag
                    var letterHTML = ""; // the string given by .html() function
                    var keyedLetters = ""; // string with keyed letters for parsing later
                    var arrayLetters = "";

                    $.each($tds, function () {

                        // building a string to parse later to see if letters are next to eachother
                        letterHTML = $(this).html();
                        numCharsHTML = letterHTML.search(".png"); //Find where .png is, this is end of url
                        if (letterHTML.substring(numCharsHTML - 1, numCharsHTML) === "")
                            keyedLetters += "%";
                        else
                            keyedLetters += letterHTML.substring(numCharsHTML - 1, numCharsHTML); // Determine letter based on end .png
                    });


                    arrayLetters = keyedLetters.split("");
                    checkRow(arrayLetters);
                    $('.currentWord').html(strWord);

                    tripleWordFlag = 1;
                    if (tripleWordFlag == 1)
                    {
                        tripleWordSum = wordSum * 3;
                        $('.wordScore').html(tripleWordSum);
                    }
                }
            }
        });


        $("[class^='holderSpace-']").droppable({
            hoverClass: 'active',
            drop: function (e, ui) {
                $(this).append(ui.draggable);
                itemId = $(ui.draggable).attr("id");

                var imageURL = (document.getElementById(itemId).src); //Get image URL from item
                var numChars = imageURL.search(".png"); //Find where .png is, this is end of url
                var letter = imageURL.substring(numChars - 1, numChars); // Determine letter based on end .png

                //If piece was taken off board, remove it from play

                if (document.getElementById(itemId).classList.contains("inPlay"))
                    document.getElementById(itemId).classList.remove("inPlay");

                if (document.getElementById(itemId).classList.contains("doubleLetter"))
                {
                    document.getElementById(itemId).classList.remove("doubleLetter");
                    wordSum -= scrabbleTiles[letter].value;
                }
                //remove from word score
                wordSum -= scrabbleTiles[letter].value;

                if (tripleWordFlag == 1)
                {
                    tripleWordSum = wordSum * 3;
                    $('.wordScore').html(tripleWordSum);
                }
                else
                    $('.wordScore').html(wordSum);

                //remove letter from "word"
                strWord.replace(letter, "---");
                errorMessage(CLR);
            }
        });
    }
});
