/* 
 File:  ~/public_html/js/buildTable.js
 91.461 Assignment 8:  Using the jQuery UI Slider and Tab Widgets
 Author: Patrick Quaratiello, UMass Lowell, Patrick_Quaratiello@stundent.uml.edu
 Created on October 1, 2015 at 8:08 PM
 Builds HTML for dynamic multiplication table. Check valMultTable.js for validation.
 */


//Build table
function buildTable( tabNum ) {

    var mplier1 = parseInt(frm.t1.value);     // convert first field to a number
    var mplier2 = parseInt(frm.t2.value);     // convert second field to a number 
    var mplicand1 = parseInt(frm.t3.value);     // convert first field to a number
    var mplicand2 = parseInt(frm.t4.value);     // convert second field to a number

    var strMultTable = "";

    strMultTable += "<div>";
    strMultTable += "<table class=\"multTable\">";
    strMultTable += "<tbody>";
    strMultTable += "<tr class=\"multiplier\">";
    strMultTable += "<td class = \"empty\">&nbsp;</td>"; //space to help make it readable
    strMultTable += "<td class = \"empty\">&nbsp;</td>"; //space to help make it readable
    strMultTable += "<td class = \"empty\">&nbsp;</td>"; //space to help make it readable
    //Build the top "head" row - These are the multipliers
    for (var cols = mplier1; cols <= mplier2; cols++)
    {
        strMultTable += "<td>" + cols + "</td>";
        strMultTable += "<td>&nbsp;</td>";
    }
    strMultTable += "</tr>";
    //Head done - now build body

    for (var dataRows = mplicand1; dataRows <= mplicand2; dataRows++)
    {
        //First column for each row is the multiplicand
        strMultTable += "<tr>";
        strMultTable += "<td class=\"multiplicand\">&nbsp;</td>";
        strMultTable += "<td class=\"multiplicand\">" + dataRows + "</td>";
        strMultTable += "<td class=\"multiplicand\">&nbsp;</td>"; //space to help make it readable
        //The rest of the rows contain the data
        for (var dataCols = mplier1; dataCols <= mplier2; dataCols++)
        {
            strMultTable += "<td>" + ((dataRows) * dataCols) + "</td>"; //Multiply is done here
            strMultTable += "<td>&nbsp;</td>"; //space to help make it readable                      
        }
        strMultTable += "</tr>";
    }
    strMultTable += "</tbody>";
    strMultTable += "</table>";
    strMultTable += "</div>";

    //All build - send it off to our multiTable id down below.
    $("#multTable-" + tabNum).html(strMultTable);
}


