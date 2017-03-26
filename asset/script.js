/**
 * Created by Neverland on 3/26/17.
 */
$(function () {

    $(".column").draggable({
        start: function (event, ui) {
            var target = document.getElementById(this.id);
            target.style.zIndex = 100;
        },
        stop: function (event, ui) {

            var currentPosition = new Object();
            var newPosition = new Array();
            for (var i = 2; i < 8; i++) {
                var positionData = getPosition(i);
                nowPosition = {'name': 'column' + i, 'position': positionData};
                newPosition.push(nowPosition);
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
        }

    });

    function getPosition(columnId) {
        var tmpItem = document.getElementById('column' + columnId);
        return tmpItem.offsetLeft;
    }
});