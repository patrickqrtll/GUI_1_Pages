/* 
 File:  ~/public_html/js/valMultTable.js
 91.461 Assignment 8:  Using the jQuery UI Slider and Tab Widgets
 Author: Patrick Quaratiello, UMass Lowell, Patrick_Quaratiello@stundent.uml.edu
 Created on October 1, 2015 at 8:01 PM
 Edited on November 6th, 12:06 PM
 Validates multiplication table using JQuery Validation Plugin
 */

//http://jqueryui.com/tabs/#manipulation

$(function () {

    var tabs = $("#tabs").tabs();

    //Variables used below to name tab and set tab values
    var tabTitle = "M-Table(CX-X,RX-X)",
            tabContent = "Empty",
            tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
            tabCounter = 0;

    // actual addTab function: adds new tab using the input from the form above
    function addTab() {
        var label = "Tab " + tabCounter + ": M-Table(C" + $("#t1").val() + "-" + $("#t2").val() + ", R" + $("#t3").val() + "-" + $("#t4").val() + ")",
                id = "tab-" + tabCounter,
                li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
                tabContentHtml = "<div id=\"multTable-" + tabCounter + "\"></div>";
        tabs.find(".ui-tabs-nav").append(li);
        tabs.append("<li id='" + id + "'><p>" + tabContentHtml + "</p></li>");
        tabs.tabs("refresh");
        buildTable(tabCounter);
        $('#tabs').tabs("option", "active", tabCounter); // Set active tab to created tab
        tabCounter++;
    }

    // addTab button: just opens the dialog
    $("#frm") // Add tab when from submission button is hit
            .submit(function () {
                if ($("#frm").valid())
                {
                    addTab();
                }
            });

    // close icon: removing the tab on click
    tabs.delegate("span.ui-icon-close", "click", function () {
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        tabs.tabs("refresh");
    });

    tabs.bind("keyup", function (event) {
        if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
            var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
            $("#" + panelId).remove();
            tabs.tabs("refresh");
        }
    });

    //Remove used for the multi-tab removal 
    $("#removeTabs")
            .button()
            .click(function () {
                for (var i = $("#t5").val(); i <= $("#t6").val(); i++)
                {
                    var panelId = $("#tabs a[href=#tab-" + i + "]").closest("li").remove().attr("aria-controls");
                    $("#" + panelId).remove();
                    tabs.tabs("refresh");
                }
            });
});

//Remove CSS from the remove tabs button.
$().ready(function () {
    $("button").removeClass("ui-button ui-widget ui-corner-all ui-button-text-only ui-state-default");
});