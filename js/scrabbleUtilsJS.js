/* 
    File:  ~/public_html/js/scrabbleUtilsJS.html
    91.461 Assignment 9:  Scrabble
    Author: Patrick Quaratiello, UMass Lowell, Patrick_Quaratiello@stundent.uml.edu
    Created on November 29th 2015
    Scrabble Utilities
 */

//Globals

//Error "Macros"
var INVALIDWORD = 2; //invalid word
var NOSUPP = 99; // not supported yet
var CLR = 0;
var NOCENTER = 3;

var scrabbleSum = 0;
var wordSum = 0;
var tripleWordSum = 0;

var strWord = "---";
var validWord = false;
var tripleWordFlag = 0;
var centerFlag = 1; // should be 0 when center checking is implemented completely
var debugFlag = 0;
var subLetters = 1;
//Utility functions

/*
function toggleDebug()
{
    if(document.getElementById('debug').checked) {
        debugFlag = 1;
        console.log(debugFlag);
    }    
    else
    {
        debugFlag = 0;
        console.log(debugFlag);
    }
    if(debugFlag)
    {
        centerFlag = 1;
        console.log(centerFlag);
    }
    else
    {
        centerFlag = 0;
        console.log(centerFlag);
    }
        
}
*/

//Check center, not fully implemented yet
function checkCenter()
{
    if(centerFlag == 0)
    {   
        errorMessage(NOCENTER);
        return 0;
    }
    else
    {
        errorMessage(CLR);
        return 1;
    }
}


function getLetterFromId(Id)
{
    var imageURL = (document.getElementById(Id).src); //Get image URL from item
    var numChars = imageURL.search(".png"); //Find where .png is, this is end of url
    var letter = imageURL.substring(numChars - 1, numChars); // Determine letter based on end .png

    return letter;
}

//for some error handling
function errorMessage(intErrorNum)
{
    var strError;
    if (intErrorNum === 0) // No Error
        strError = "&nbsp";
    else if (intErrorNum === 2) // No Error
        strError = "Invalid Word!";
    else if (intErrorNum === 3) // No Error
        strError = "Word must start at center!";
    else
        strError = "We're not quite done with this yet... Sorry!";
    $('.errorBox').html(strError);
}

//THINK I NEED TO FIX THIS AND HOW NUMBER PIECES REMAINING IS CALCULATED
//function called to get new random letters from available letters 
function getRandomLetter()
{
    var letterAscii = getRandomInt(65, 91);
    if (letterAscii === 91)
        var letterChar = "_";
    else
        letterChar = String.fromCharCode(letterAscii);

    if (scrabbleTiles[letterChar].numberRemaining === 0)
    {
        console.log(letterChar + ": 0 remaining")
        while (scrabbleTiles[letterChar].numberRemaining === 0)
        {
            letterAscii = getRandomInt(65, 91);
            if (letterAscii === 91)
                var letterChar = "_";
            else
                letterChar = String.fromCharCode(letterAscii);
        }
    }
    return letterChar;
}

// Old function -- not used as of now
/*
 function getNewLetters()
 {
 for (var i = 1; i <= 7; i++)
 {
 var letterAscii = getRandomInt(65, 91);
 if (letterAscii === 91)
 var letterChar = "_";
 else
 letterChar = String.fromCharCode(letterAscii);
 
 while (scrabbleTiles[letterChar].numberRemaining === 0)
 {
 letterAscii = getRandomInt(65, 91);
 if (letterAscii === 91)
 var letterChar = "_";
 else
 letterChar = String.fromCharCode(letterAscii);
 console.log("This letter has 0 left!");
 }
 
 document.getElementById("letter-" + i).src = scrabbleTiles[letterChar].image;
 wordSum = 0; // reset for now, score gets messed up if you get new letters.
 $('.wordScore').html(wordSum);
 errorMessage(NOSUPP);
 }
 }
 */
//Submit word
function submitWord()
{
    if (validWord == true && strWord != "---" && strWord.length > 1)// we need to check words at some point
    {
        var arrayLetters = 0;
        var letterId;
        var letter;
        var arrayLetterId = [];
        console.log("Word Submitted!"); // for debugging
        
        if(tripleWordFlag)
            scrabbleSum += tripleWordSum;
        else
            scrabbleSum += wordSum;
        arrayLetters = strWord.split(""); // store what letters are in play
        strWord = "---"; //set word to blank
        
        $('.scrabbleScore').html(scrabbleSum); //update UI
        $('.wordScore').html(wordSum);
        $('.currentWord').html(strWord);

        validWord = false; // word is now not valid

        //set new letter amounts
        for (var i = 0; i < arrayLetters.length; i++)
        {
            scrabbleTiles[arrayLetters[i]].numberRemaining -= 1;
        }
        $(".inPlay").addClass("submitted"); // if the word is now "submitted"
        $(".submitted").removeClass("inPlay");
        $(".submitted").each(function () { arrayLetterId.push(this.id);});
        for(var i = 0; i < arrayLetterId.length; i++)
        {
           $(".submitted").attr("id", "sub-" + wordSum);
        }
        wordSum = 0; // word score is 0
        errorMessage(CLR);
    }
    else
        errorMessage(INVALIDWORD); // Invalid Word

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//takes array of letters with formal <letter><letter> where % is a space
function checkRow(rowArray)
{
    var wordFlag = 0; //if wordFlag is true, the word has begun and next place cannot be space.
    strWord = "";
    for (var i = 0; i < rowArray.length; i++)
    {
        if (rowArray[i] != "%" && wordFlag == -1)
        {
            console.log("ERR");
            errorMessage(INVALIDWORD);
            strWord = "---";
            validWord = false;
            break;
        }
        if (rowArray[i] != "%")
        {
            wordFlag = 1;
            strWord += rowArray[i];
            validWord = true;
        }
        if (rowArray[i] == "%" && wordFlag == 1)
        {
            //better not find another letter!
            wordFlag = -1;
            validWord = true;
        }
    }

}

//Create dynamic pieces
function buildPieces()
{
    var strPieces = "";
    var i = 1;

    for (var i = 1; i < 8; i++)
    {
        if ($(".holderSpace-" + i).html() == "" && strWord == "---")
        {

            strPieces = "<img id = \"letter-" + i + "\" src=\"images/error.png\" alt=\"error\" width=\"59\" height=\"59\">";

            $(".holderSpace-" + i).html(strPieces);

            $(document).ready(function () {
                document.getElementById("letter-" + i).src = scrabbleTiles[getRandomLetter()].image;
            });
        }

        $("[id^='letter-']").draggable({
            revert: true,
            stop: function (event, ui) {

            }
        });
    }
}

