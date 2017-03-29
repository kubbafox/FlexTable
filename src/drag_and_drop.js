/**
 * Created by Neverland on 3/26/17.
 */

'use strict'

$(function () {

    // Drag & Drop Columns

    $(".column").draggable({
        start: function (event, ui) {

            //Update CSS Properties to highlight dragged column
            var target = document.getElementById(this.id);
            target.style.zIndex = 100;
            target.style.background = "#fffdc4";
            target.style.transition = "background 0.4s ease";

            //Dash Left & Right borders when the drag event happens
            var allColumns = document.getElementsByClassName('column');
            for (var i = 0; i < allColumns.length; i++) {
                allColumns[i].style.opacity = 0.9;
            }

            //Show Drop Arrows for All Columns
            var allColunmDropArrow = document.getElementsByClassName("column_drop_arrow");
            for (var i = 0; i < allColunmDropArrow.length; i++) {
                allColunmDropArrow[i].style.opacity = 1;
            }

            //Hide Arrows for the Column which users are dragging
            var draggedColunmDropArrow = document.getElementById("column_header_drop_arrow_" + (this.id).split("olumn")[1]);
            draggedColunmDropArrow.style.opacity = 0;

            // var columnInex = parseInt((this.id).split("olumn")[1]);

            //Get offsetWidth Value for the Column which users are dragging
            var draggedColunmWidth = parseInt(document.getElementById(this.id).offsetWidth);
            // console.log(draggedColunmWidth);

            //Get Order Index for the Column which users are dragging
            var targetStyle = window.getComputedStyle(target)
            var draggedColunmOrderIndex = parseInt(targetStyle.getPropertyValue('order'));
            // console.log(draggedColunmOrderIndex);

            //Get a map between current elements and their offsetLeft values
            var initialPosition = new Object();
            var currentPosition = new Array();

            for (var i = 2; i < 8; i++) {
                var positionData = getColumnPosition(i);
                initialPosition = {'name': 'column' + i, 'position': positionData};
                currentPosition.push(initialPosition);
            }

            currentPosition.sort(function (a, b) {
                if (a['position'] > b['position']) return 1;
                if (a['position'] < b['position']) return -1;
                return 0;
            });

            //Reduce the offsetWidth for all columns which are location on the right-hand
            for (var i = draggedColunmOrderIndex + 1; i < allColumns.length; i++) {
                var ElementId = currentPosition[i].name;

                var tmpItem = document.getElementById(ElementId);
                tmpItem.style.left = (-Math.abs(draggedColunmWidth)).toString() + 'px';
                
            };
        },

        stop: function (event, ui) {

            //Reset CSS after drag event completed
            var target = document.getElementById(this.id);
            target.style.zIndex = null;
            target.style.background = "";
            target.style.transition = "background 1s ease"

            var allColumns = document.getElementsByClassName('column');

            for (var i = 0; i < allColumns.length; i++) {
                allColumns[i].style.opacity = 1;
                allColumns[i].style.margin = "0px";
                allColumns[i].style.borderWidth = "0px";
            }

            //Reset & Hide All Arrows
            var allColunmDropArrow = document.getElementsByClassName("column_drop_arrow");
            for (var i = 0; i < allColunmDropArrow.length; i++) {
                allColunmDropArrow[i].style.opacity = 0;
            }

            //Sort & Re-order Columns
            var currentPosition = new Object();
            var newPosition = new Array();

            for (var i = 2; i < 8; i++) {
                var positionData = getColumnPosition(i);
                currentPosition = {'name': 'column' + i, 'position': positionData};
                newPosition.push(currentPosition);
            }

            newPosition.sort(function (a, b) {
                if (a['position'] > b['position']) return -1;
                if (a['position'] < b['position']) return 1;
                return 0;
            });

            console.log(newPosition)

            var number = 0;
            for (var i = newPosition.length; i--;) {
                var tmpItem = document.getElementById(newPosition[i].name);
                tmpItem.style.order = number;
                tmpItem.style.left = 0;
                tmpItem.style.top = 0;
                tmpItem.style.zIndex = 0;
                number++;
            }
        }

    });

    // Drag & Drop Rows

    $(".row_header").draggable({
        start: function (event, ui) {

            //Update CSS Properties to highlight dragged row
            var target = document.getElementById(this.id);
            target.style.zIndex = 1;

            var draggedRow = document.getElementsByClassName('row' + (this.id).split("row")[1]);
            for (var i = 0; i < draggedRow.length; i++) {
                draggedRow[i].style.background = "#fffdc4";
                draggedRow[i].style.transition = "background 0.4s ease";
            };

            var allRows = document.getElementsByClassName('row');
            for (var i = 0; i < allRows.length; i++){
                allRows[i].style.borderWidth = "1px 1px 1px 1px";
                allRows[i].style.borderTopStyle = "dashed";
                allRows[i].style.borderBottomStyle = "dashed";
                allRows[i].style.borderColor = "#e0e0e0";
                allRows[i].style.transition = "margin 0.2s ease"
            }
            var allRowHeader = document.getElementsByClassName('row_header');
            for (var i = 0; i < allRowHeader.length; i++){
                allRowHeader[i].style.borderWidth = "1px 1px 1px 1px";
                allRowHeader[i].style.borderColor = "#e0e0e0";
                allRowHeader[i].style.transition = "margin 0.2s ease"
            }
        },

        stop: function (event, ui) {
            var target = document.getElementById(this.id);
            target.style.zIndex = null;

            // Reset CSS after drag event completed
            var allRows = document.getElementsByClassName('row');
            for (var i = 0; i < allRows.length; i++){
                allRows[i].style.margin = "0";
                allRows[i].style.borderWidth = "1px";
                allRows[i].style.borderStyle = "solid";
                allRows[i].style.borderColor = "#f2f2f2;";
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
                draggedRows[i].style.background = "";
                draggedRows[i].style.transition = "background 1s ease"
            };

            //Sort & Re-order Rows
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


        }
    });

    //Utility functions
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