/* 
 File:  ~/public_html/js/valMultTable.js
 91.461 Assignment 7:  Using the jQuery Validation Plugin with Your Dynamic Table
 Author: Patrick Quaratiello, UMass Lowell, Patrick_Quaratiello@stundent.uml.edu
 Created on October 1, 2015 at 8:01 PM
 Edited on November 6th, 12:06 PM
 Validates multiplication table using JQuery Validation Plugin
 */

//Check if number and field not empty. If issues show message.
var validateForm = function () {

    //We're valid until we're not, of course.
    jQuery.validator.setDefaults({
        success: "valid"
    });

    $().ready(function () {
        $("#frm").validate({
            rules: {
                t1: {
                    "required": true,
                    "number": true,
                    "range": [-999,999]           
                },
                t2: {
                    "required": true,
                    "number": true,
                    "greaterThanOrEqual": "#t1",
                    "range": [-999,999]
                },
                t3: {
                    "required": true,
                    "number": true,
                    "range": [-999,999]
                },
                t4: {
                    "required": true,
                    "number": true,
                    "greaterThanOrEqual": "#t3",
                    "range": [-999,999]
                }
            },
            errorLabelContainer: '#errorBox',
            wrapper: "div",
            messages: {
                t1: {
                    required: "Field \"First Column\" is required!",
                    number: "Please enter a valid number in field \"First Column\"!",
                    range: "Value must be between less than 1000 and greater than -1000"
                },
                t2: {
                    required: "Field \"Last Column\" is required!",
                    number: "Please enter a valid number in field \"Last Column\"!",
                    greaterThanOrEqual: "\"Last Column\" must be greater than or equal to \"First Column\"",
                    range: "Value must be between less than 1000 and greater than -1000"
                },
                t3: {
                    required: "Field \"First Row\" is required!",
                    number: "Please enter a valid number in field \"First Row\"!",
                    range: "Value must be between less than 1000 and greater than -1000"
                },
                t4: {
                    required: "Field \"Last Row\" is required!",
                    number: "Please enter a valid number in field \"Last Row\"!",
                    greaterThanOrEqual: "\"Last Row\" must be greater than or equal to \"First Row\"",
                    range: "Value must be between less than 1000 and greater than -1000"
                }
            }
        });
    });     
};