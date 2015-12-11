/* 
 File:  ~/public_html/js/JQUISliders.js
 91.461 Assignment 8:  Using the jQuery UI Slider and Tab Widgets
 Author: Patrick Quaratiello, UMass Lowell, Patrick_Quaratiello@stundent.uml.edu
 Created on November 15, 2015 at 11:24 PM
 Functions for multtable.html sliders
 */

// Help from:
// http://stackoverflow.com/questions/20150447/customizing-jquery-ui-slider-height-width
// http://stackoverflow.com/questions/7523864/ui-slider-with-text-box-input

//Slider for first column
$(function () {
    $("#slider1").slider({
        min: -999,
        max: 999,
        slide: function (event, ui) {
            $("#t1").val(ui.value);
            $("#t1").focus(); //Focus and blur to refresh errors if slider fixed
            $("#t1").blur();
        }
    });
    $("#t1").change(function () {
        var value = this.value.substring(1);
        if(isNaN(value)) // If it isn't a number set the focus first, fixes issue with slider not working after non number entered
            $("#t1").focus();
        else
            $("#slider1").slider("value", parseFloat(value));
    });
});

//Slider for last column
$(function () {
    $("#slider2").slider({
        min: -999,
        max: 999,
        slide: function (event, ui) {
            $("#t2").val(ui.value);
            $("#t2").focus(); //Focus and blur to refresh errors if slider fixed
            $("#t2").blur();
        }
    });
    $("#t2").change(function () {
        var value = this.value.substring(1);
        if(isNaN(value)) // If it isn't a number set the focus first, fixes issue with slider not working after non number entered
            $("#t2").focus();
        else
            $("#slider2").slider("value", parseFloat(value));
    });
});

//Slider for first row
$(function () {
    $("#slider3").slider({
        min: -999,
        max: 999,
        slide: function (event, ui) {
            $("#t3").val(ui.value);
            $("#t3").focus(); //Focus and blur to refresh errors if slider fixed
            $("#t3").blur();
        }
    });
    $("#t3").change(function () {
        var value = this.value.substring(1);
        if(isNaN(value)) // If it isn't a number set the focus first, fixes issue with slider not working after non number entered
            $("#t3").focus();
        else
            $("#slider3").slider("value", parseFloat(value));
    });
});

//Slider for last column
$(function () {
    $("#slider4").slider({
        min: -999,
        max: 999,
        slide: function (event, ui) {
            $("#t4").val(ui.value);
            $("#t4").focus(); //Focus and blur to refresh errors if slider fixed
            $("#t4").blur();
        }
    });
    $("#t4").change(function () {
        var value = this.value.substring(1);
        if(isNaN(value)) // If it isn't a number set the focus first, fixes issue with slider not working after non number entered
            $("#t4").focus();
        else
            $("#slider4").slider("value", parseFloat(value));
    });
});

