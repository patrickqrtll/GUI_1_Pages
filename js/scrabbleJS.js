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
var scrabbleTiles = [];
scrabbleTiles["A"] = {"value": 1, "originalDistribution": 9, "numberRemaining": 9, image: "images/scrabbleLetterA.png"};
scrabbleTiles["B"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2, image: "images/scrabbleLetterB.png"};
scrabbleTiles["C"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2, image: "images/scrabbleLetterC.png"};
scrabbleTiles["D"] = {"value": 2, "originalDistribution": 4, "numberRemaining": 4, image: "images/scrabbleLetterD.png"};
scrabbleTiles["E"] = {"value": 1, "originalDistribution": 12, "numberRemaining": 12, image: "images/scrabbleLetterE.png"};
scrabbleTiles["F"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2, image: "images/scrabbleLetterF.png"};
scrabbleTiles["G"] = {"value": 2, "originalDistribution": 3, "numberRemaining": 3, image: "images/scrabbleLetterG.png"};
scrabbleTiles["H"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2, image: "images/scrabbleLetterH.png"};
scrabbleTiles["I"] = {"value": 1, "originalDistribution": 9, "numberRemaining": 9, image: "images/scrabbleLetterI.png"};
scrabbleTiles["J"] = {"value": 8, "originalDistribution": 1, "numberRemaining": 1, image: "images/scrabbleLetterJ.png"};
scrabbleTiles["K"] = {"value": 5, "originalDistribution": 1, "numberRemaining": 1, image: "images/scrabbleLetterK.png"};
scrabbleTiles["L"] = {"value": 1, "originalDistribution": 4, "numberRemaining": 4, image: "images/scrabbleLetterL.png"};
scrabbleTiles["M"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2, image: "images/scrabbleLetterM.png"};
scrabbleTiles["N"] = {"value": 1, "originalDistribution": 6, "numberRemaining": 6, image: "images/scrabbleLetterN.png"};
scrabbleTiles["O"] = {"value": 1, "originalDistribution": 8, "numberRemaining": 8, image: "images/scrabbleLetterO.png"};
scrabbleTiles["P"] = {"value": 3, "original-distribution": 2, "number-remaining": 2, image: "images/scrabbleLetterP.png"};
scrabbleTiles["Q"] = {"value": 10, "original-distribution": 1, "number-remaining": 1, image: "images/scrabbleLetterQ.png"};
scrabbleTiles["R"] = {"value": 1, "original-distribution": 6, "number-remaining": 6, image: "images/scrabbleLetterR.png"};
scrabbleTiles["S"] = {"value": 1, "original-distribution": 4, "number-remaining": 4, image: "images/scrabbleLetterS.png"};
scrabbleTiles["T"] = {"value": 1, "original-distribution": 6, "number-remaining": 6, image: "images/scrabbleLetterT.png"};
scrabbleTiles["U"] = {"value": 1, "original-distribution": 4, "number-remaining": 4, image: "images/scrabbleLetterU.png"};
scrabbleTiles["V"] = {"value": 4, "original-distribution": 2, "number-remaining": 2, image: "images/scrabbleLetterV.png"};
scrabbleTiles["W"] = {"value": 4, "original-distribution": 2, "number-remaining": 2, image: "images/scrabbleLetterW.png"};
scrabbleTiles["X"] = {"value": 8, "original-distribution": 1, "number-remaining": 1, image: "images/scrabbleLetterX.png"};
scrabbleTiles["Y"] = {"value": 4, "original-distribution": 2, "number-remaining": 2, image: "images/scrabbleLetterY.png"};
scrabbleTiles["Z"] = {"value": 10, "original-distribution": 1, "number-remaining": 1, image: "images/scrabbleLetterZ.png"};
scrabbleTiles["_"] = {"value": 0, "original-distribution": 2, "number-remaining": 2, image: "images/scrabbleLetter_.png"};


var scrabbleSum = 0;

function errorMessage(intErrorNum)
{
    var strError;
    if (intErrorNum === 0) // No Error
        strError = "&nbsp";
    else
        strError = "We're not quite done with this yet... Sorry!";
    $('.errorBox').html(strError);
}

function getNewLetters()
{
    for (var i = 1; i <= 7; i++)
    {
        var letterAscii = getRandomInt(65, 91); // FIX THIS, should be 90 when all letters are added!!!!
        if (letterAscii === 91)
            var letterChar = "_";
        else
            letterChar = String.fromCharCode(letterAscii);

        while (scrabbleTiles[letterChar].numberRemaining === 0)
        {
            letterAscii = getRandomInt(65, 91); // FIX THIS, should be 90 when all letters are added!!!!
            if (letterAscii === 91)
                var letterChar = "_";
            else
                letterChar = String.fromCharCode(letterAscii);
            console.log("This letter has 0 left!");
        }

        document.getElementById("letter-" + i).src = scrabbleTiles[letterChar].image;
        scrabbleSum = 0; // reset for now, score gets messed up if you get new letters.
        errorMessage(0);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {

    $('.scrabbleScore').html(scrabbleSum);
    for (var i = 1; i <= 7; i++)
    {
        var letterAscii = getRandomInt(65, 91); // FIX THIS, should be 90 when all letters are added!!!!
        if (letterAscii === 91)
            var letterChar = "_";
        else
            letterChar = String.fromCharCode(letterAscii);

        while (scrabbleTiles[letterChar].numberRemaining === 0)
        {
            letterAscii = getRandomInt(65, 91); // FIX THIS, should be 90 when all letters are added!!!!
            if (letterAscii === 91)
                var letterChar = "_";
            else
                letterChar = String.fromCharCode(letterAscii);
            console.log("This letter has 0 left!");
        }

        document.getElementById("letter-" + i).src = scrabbleTiles[letterChar].image;
    }

    $("[id^='letter-']").draggable({
        revert: true
    });
    drop();

    function drop() {

        $(".boardSpace").droppable({
            hoverClass: 'active',
            drop: function (e, ui) {
                $(this).append(ui.draggable);

                itemId = $(ui.draggable).attr("id");
                var imageURL = (document.getElementById(itemId).src); //Get image URL from item
                var numChars = imageURL.search(".png"); //Find where .png is, this is end of url
                var letter = imageURL.substring(numChars - 1, numChars); // Determine letter based on end .png

                scrabbleSum += scrabbleTiles[letter].value;
                scrabbleTiles[letter].numberRemaining -= 1;

                $('.scrabbleScore').html(scrabbleSum);
                errorMessage(0);
            }
        });

        $(".holderSpace").droppable({
            hoverClass: 'active',
            drop: function (e, ui) {
                $(this).append(ui.draggable);

                itemId = $(ui.draggable).attr("id");
                var imageURL = (document.getElementById(itemId).src); //Get image URL from item
                var numChars = imageURL.search(".png"); //Find where .png is, this is end of url
                var letter = imageURL.substring(numChars - 1, numChars); // Determine letter based on end .png

                scrabbleSum -= scrabbleTiles[letter].value;
                scrabbleTiles[letter].numberRemaining += 1;

                $('.scrabbleScore').html(scrabbleSum);
                errorMessage(0);
            }
        });
    }

    /*  $(".boardSpace, .holderSpace").on("click", ".letter a", function () {
     $(this).closest("[id^='letter-']").fadeOut(200, function () {
     $('.drag-item').prepend($(this).css('display', 'block'));
     });
     });*/

});
