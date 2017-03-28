/**
 * Created by Neverland on 3/26/17.
 */

'use strict'

$(function () {

    // Drag & Drop Columns

    $(".column").draggable({
        start: function (event, ui) {
            var target = document.getElementById(this.id);
            target.style.zIndex = 100;

            //Dash Left & Right borders when the drag event happens 
            var allColumns = document.getElementsByClassName('column');

            for (var i = 0; i < allColumns.length; i++) {
                allColumns[i].style.margin = "0 0 0 3px";
                allColumns[i].style.borderStyle = "dashed";
                allColumns[i].style.borderColor = "#e0e0e0";
                allColumns[i].style.borderWidth = "0 1px 1px 1px";
                allColumns[i].style.transition = "margin 0.2s ease"
            }
        },
        stop: function (event, ui) {

            var currentPosition = new Object();
            var newPosition = new Array();

            for (var i = 2; i < 8; i++) {
                var positionData = getColumnPosition(i);
                currentPosition = {'name': 'column' + i, 'position': positionData};
                // console.log(currentPosition);

                newPosition.push(currentPosition);
            }

            newPosition.sort(function (a, b) {
                if (a['position'] > b['position']) return -1;
                if (a['position'] < b['position']) return 1;
                return 0;
            });

            var number = 0;
            for (var i = newPosition.length; i--;) {

                var tmpItem = document.getElementById(newPosition[i].name);
                tmpItem.style.order = number;
                tmpItem.style.left = 0;
                tmpItem.style.top = 0;
                tmpItem.style.zIndex = 0;

                number++;
            }

            //Reset Left & Right borders after drag event completed
            var allColumns = document.getElementsByClassName('column');

            for (var i = 0; i < allColumns.length; i++) {
                allColumns[i].style.margin = "0px";
                allColumns[i].style.borderWidth = "0px";
                allColumns[i].style.transition = "margin 0.2s ease"
            }
        }

    });

    // Drag & Drop Rows

    $(".row_header").draggable({
        start: function (event, ui) {
            var target = document.getElementById(this.id);
                // target.style.zIndex = 100;

            var draggedRows = document.getElementsByClassName('row' + (this.id).split("row")[1]);
            for (var i = 0; i < draggedRows.length; i++) {
                draggedRows[i].style.background = "#fffdc4";
                draggedRows[i].style.transition = "background 1s ease"
            };

            console.log(draggedRows);

            var allRows = document.getElementsByClassName('row');
            for (var i = 0; i < allRows.length; i++){
                allRows[i].style.margin = "0 0 1px 0";
                allRows[i].style.borderWidth = "1px 0px 1px 1px";
                allRows[i].style.borderStyle = "dashed";
                allRows[i].style.borderColor = "#e0e0e0";
                allRows[i].style.transition = "margin 0.2s ease"
            }
            var allRowHeader = document.getElementsByClassName('row_header');
            for (var i = 0; i < allRowHeader.length; i++){
                allRowHeader[i].style.margin = "0 0 1px 0";
                allRowHeader[i].style.borderWidth = "1px 0px 1px 1px";
                allRowHeader[i].style.borderStyle = "dashed";
                allRowHeader[i].style.borderColor = "#e0e0e0";
                allRowHeader[i].style.transition = "margin 0.2s ease"
            }
        },
        stop: function (event, ui) {
            var target = document.getElementById(this.id);
            // target.style.zIndex = 0;

            var currentPosition = new Object();
            var newPosition = new Array();
            var userCount = getuserCount();

            for (var i = 1; i <= userCount; i++) {
                var positionData = getRowPosition(i);
                currentPosition = {'name': 'column1_row' + i, 'position': positionData};
                newPosition.push(currentPosition);
            }


            newPosition.sort(function (a, b) {
                if (a['position'] > b['position']) return -1;
                if (a['position'] < b['position']) return 1;
                return 0;
            });

            // console.log(newPosition);

            var numberOrder = 1;
            for (var i = newPosition.length; i--;) {

                var tmpItem = document.getElementById(newPosition[i].name);

                tmpItem.style.order = numberOrder;
                tmpItem.style.left = 0;
                tmpItem.style.top = 0;
                numberOrder++;
            }

            // Get Original Row Index in the order
            var rowOrder = new Array();
            for (var i = 0; i < newPosition.length; i++) {
                var originalRowIndex = parseInt(newPosition[i].name.split('row')[1]);
                rowOrder.push(originalRowIndex);
            }

            console.log(rowOrder);

            // Update orders for all other rows
            var newRowOrder = 2;
            for (var i = rowOrder.length; i--;) {

                var otherRows = document.getElementsByClassName('row' + rowOrder[i]);

                for (var j = 1; j < otherRows.length; j++) {
                    var tmpItem = otherRows[j];
                    tmpItem.style.order = newRowOrder;
                }
                newRowOrder++;
            }

            //Reset row styles after the drag event completed
            var allRows = document.getElementsByClassName('row');
            for (var i = 0; i < allRows.length; i++){
                allRows[i].style.margin = "0";
                allRows[i].style.borderWidth = "1px";
                allRows[i].style.borderStyle = "solid";
                allRows[i].style.borderColor = "#e0e0e0;";
                allRows[i].style.transition = "margin 0.2s ease"
            }
            var allRowHeader = document.getElementsByClassName('row_header');
            for (var i = 0; i < allRowHeader.length; i++){
                allRowHeader[i].style.margin = "0";
                allRowHeader[i].style.borderWidth = "1px";
                allRowHeader[i].style.borderStyle = "solid";
                allRowHeader[i].style.borderColor = "#e0e0e0;";
                allRowHeader[i].style.transition = "margin 0.2s ease"
            }
            var draggedRows = document.getElementsByClassName('row' + (this.id).split("row")[1]);
            for (var i = 0; i < draggedRows.length; i++) {
                draggedRows[i].style.background = "transparent";
                draggedRows[i].style.transition = "background 0.8s ease"
            };
        }
    });

    function getColumnPosition(columnId) {
        var tmpItem = document.getElementById('column' + columnId);
        return tmpItem.offsetLeft;
    }

    function getRowPosition(rowId) {
        var tmpItem = document.getElementById('column1_row' + rowId);
        return tmpItem.offsetTop;
    }

    function getuserCount() {
        //Get user Count
        //Remove column_header
        var userCount = document.getElementById('column1').childNodes.length - 3;
        return userCount;
    }


});