/* 
 File:  ~/public_html/js/JQVaddedMethods.js
 91.461 Assignment 7:  Using the jQuery Validation Plugin with Your Dynamic Table
 Author: Patrick Quaratiello, UMass Lowell, Patrick_Quaratiello@stundent.uml.edu
 Created on October 1, 2015 at 7:57 PM
 Functions added to JQuery Validator Plugin with addMethod
 */

//Greater than and less than - help from 
//http://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot

jQuery.validator.addMethod("greaterThan",
        function (value, element, param) {
            if ($(param).val() === "")
                return true; //We don't want an error when the other field isn't filled in yet!
            if (isNaN($(param).val()))
                return true; //We don't want an error when field is not a number!
            return parseFloat(value, 10) >= (parseFloat($(param).val(), 10));
        }, 'Must be greater than other element!');

jQuery.validator.addMethod("lessThan",
        function (value, element, param) {
            if ($(param).val() === "")
                return true;
            if (isNaN($(param).val()))
                return true; //We don't want an error when field is not a number!
            return parseFloat(value, 10) <= parseFloat($(param).val(), 10);
        }, 'Must be less than other element!');
