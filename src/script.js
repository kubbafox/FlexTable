/**
 * Created by Neverland on 3/26/17.
 */
$(function () {

    // Drag & Drop Columns

    $(".column").draggable({
        start: function (event, ui) {
            var target = document.getElementById(this.id);
            target.style.zIndex = 100;
            console.log(target);
            
            //Dash Left & Right borders when the drag event happens 
            var allColumns = document.getElementsByClassName('column');
            console.log(allColumns);
            
            for (var i = 0; i < allColumns.length; i++) {
                allColumns[i].style.margin = "0 0 10px 3px";
                allColumns[i].style.borderStyle = "dashed";
                allColumns[i].style.borderColor = "#545454";
                allColumns[i].style.borderWidth = "0 1px 1px 1px";
                allColumns[i].style.transition = "margin 0.2s ease"
            }
        },
        stop: function (event, ui) {

            var currentPosition = new Object();
            var newPosition = new Array();

            for (var i = 2; i < 8; i++) {
                var positionData = getPosition(i);
                currentPosition = {'name': 'column' + i, 'position': positionData};

                newPosition.push(currentPosition);
            }

            newPosition.sort(function (a, b) {
                if (a['position'] > b['position']) return -1;
                if (a['position'] < b['position']) return 1;
                return 0;
            });

            var number = 0;
            for (var i = newPosition.length; i--;) {
                console.log(newPosition[i].name);

                var tmpItem = document.getElementById(newPosition[i].name);
                tmpItem.style.order = number;
                tmpItem.style.left = 0;
                tmpItem.style.top = 0;

                number++;
            }
            
            var target = document.getElementById(this.id);
            target.style.zIndex = 0;

            //Reset Left & Right borders when the drag event completed
            var allColumns = document.getElementsByClassName('column');
            console.log(allColumns);

            for (var i = 0; i < allColumns.length; i++) {
                allColumns[i].style.margin = "0px";
                allColumns[i].style.borderWidth = "0px";
                allColumns[i].style.transition = "margin 0.2s ease"
            }
        }

    });

    function getPosition(columnId) {
        var tmpItem = document.getElementById('column' + columnId);
        return tmpItem.offsetLeft;
    }

    // Drag & Drop Rows
    // $(".row_header").draggable({
    //     start: function (event, ui) {
    //         var target = document.getElementById(this.id);
    //         target.style.zIndex = 100;
    //     },
    //    
    // });
});