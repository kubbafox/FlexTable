/**
 * Created by Neverland on 3/27/17.
 */

'use strict'

$(function () {

    var mockUsers = [
        {
            "id": 1,
            "name": "Jane Webb",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "5/19/2016",
            "total_deals": 54,
            "payment_cycle": "annually",
            "outstanding_balance": "$5806.24",
            "paid_amount": "$2146.70"
        },
        {
            "id": 2,
            "name": "Anthony Gibson",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "9%",
            "contract_end_day": "2/21/2017",
            "total_deals": 99,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$14609.61",
            "paid_amount": "$18079.02"
        },
        {
            "id": 3,
            "name": "Victor Simmons",
            "img_url": "asset/img/fbJsHoP.png",
            "commission_rate": "9%",
            "contract_end_day": "9/2/2016",
            "total_deals": 97,
            "payment_cycle": "monthly",
            "outstanding_balance": "$3344.06",
            "paid_amount": "$18358.86"
        },
        {
            "id": 4,
            "name": "Donna Reyes",
            "img_url": "asset/img/YePW5NR.jpg",
            "commission_rate": "90%",
            "contract_end_day": "8/3/2016",
            "total_deals": 51,
            "payment_cycle": "monthly",
            "outstanding_balance": "$8599.40",
            "paid_amount": "$8154.39"
        },
        {
            "id": 5,
            "name": "Todd Peters",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "2/11/2017",
            "total_deals": 92,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$10940.73",
            "paid_amount": "$17910.47"
        },
        {
            "id": 6,
            "name": "Patricia Carr",
            "img_url": "asset/img/Kk6IdRL.jpg",
            "commission_rate": "21%",
            "contract_end_day": "2/11/2017",
            "total_deals": 72,
            "payment_cycle": "annually",
            "outstanding_balance": "$6385.47",
            "paid_amount": "$17310.78"
        },
        {
            "id": 7,
            "name": "Jacqueline Davis",
            "img_url": "asset/img/YePW5NR.jpg",
            "commission_rate": "23%",
            "contract_end_day": "11/29/2016",
            "total_deals": 81,
            "payment_cycle": "annually",
            "outstanding_balance": "$5433.61",
            "paid_amount": "$4281.15"
        },
        {
            "id": 8,
            "name": "Heather Mcdonald",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "3%",
            "contract_end_day": "7/18/2016",
            "total_deals": 98,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$10515.56",
            "paid_amount": "$1112.12"
        },
        {
            "id": 9,
            "name": "Nicole Willis",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "90%",
            "contract_end_day": "9/21/2016",
            "total_deals": 63,
            "payment_cycle": "annually",
            "outstanding_balance": "$1014.84",
            "paid_amount": "$12243.56"
        },
        {
            "id": 10,
            "name": "Anthony Mills",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "9/7/2016",
            "total_deals": 2,
            "payment_cycle": "annually",
            "outstanding_balance": "$10858.51",
            "paid_amount": "$9096.66"
        },
        {
            "id": 11,
            "name": "Johnny Ross",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "32%",
            "contract_end_day": "3/1/2017",
            "total_deals": 43,
            "payment_cycle": "monthly",
            "outstanding_balance": "$1533.94",
            "paid_amount": "$2176.81"
        },
        {
            "id": 12,
            "name": "Virginia Carroll",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "90%",
            "contract_end_day": "10/15/2016",
            "total_deals": 49,
            "payment_cycle": "monthly",
            "outstanding_balance": "$18957.34",
            "paid_amount": "$14707.33"
        },
        {
            "id": 13,
            "name": "Judy Collins",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "3%",
            "contract_end_day": "11/3/2016",
            "total_deals": 20,
            "payment_cycle": "monthly",
            "outstanding_balance": "$17183.42",
            "paid_amount": "$11928.61"
        },
        {
            "id": 14,
            "name": "Cheryl Richardson",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "90%",
            "contract_end_day": "11/10/2016",
            "total_deals": 54,
            "payment_cycle": "monthly",
            "outstanding_balance": "$18930.63",
            "paid_amount": "$9575.03"
        },
        {
            "id": 15,
            "name": "Jesse Carpenter",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "23%",
            "contract_end_day": "9/23/2016",
            "total_deals": 71,
            "payment_cycle": "monthly",
            "outstanding_balance": "$6261.63",
            "paid_amount": "$4522.22"
        },
        {
            "id": 16,
            "name": "Steve Roberts",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "32%",
            "contract_end_day": "1/4/2017",
            "total_deals": 47,
            "payment_cycle": "annually",
            "outstanding_balance": "$14347.20",
            "paid_amount": "$17468.38"
        },
        {
            "id": 17,
            "name": "Roger Hill",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "32%",
            "contract_end_day": "7/26/2016",
            "total_deals": 83,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$19955.70",
            "paid_amount": "$3315.55"
        },
        {
            "id": 18,
            "name": "Donald Hawkins",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "7/31/2016",
            "total_deals": 15,
            "payment_cycle": "monthly",
            "outstanding_balance": "$12698.59",
            "paid_amount": "$95.00"
        },
        {
            "id": 19,
            "name": "Dennis Howell",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "23%",
            "contract_end_day": "3/11/2017",
            "total_deals": 39,
            "payment_cycle": "monthly",
            "outstanding_balance": "$2966.06",
            "paid_amount": "$5628.36"
        },
        {
            "id": 20,
            "name": "Shawn Ortiz",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "12/16/2016",
            "total_deals": 13,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$78.04",
            "paid_amount": "$11618.05"
        },
        {
            "id": 21,
            "name": "Stephanie Mills",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "6/18/2016",
            "total_deals": 22,
            "payment_cycle": "annually",
            "outstanding_balance": "$149.18",
            "paid_amount": "$1314.47"
        },
        {
            "id": 22,
            "name": "Arthur Clark",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "9%",
            "contract_end_day": "7/21/2016",
            "total_deals": 97,
            "payment_cycle": "annually",
            "outstanding_balance": "$6276.92",
            "paid_amount": "$17259.31"
        },
        {
            "id": 23,
            "name": "Eric Hall",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "8/7/2016",
            "total_deals": 66,
            "payment_cycle": "monthly",
            "outstanding_balance": "$8422.54",
            "paid_amount": "$9560.38"
        },
        {
            "id": 24,
            "name": "Alice Flores",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "8/26/2016",
            "total_deals": 14,
            "payment_cycle": "monthly",
            "outstanding_balance": "$19300.52",
            "paid_amount": "$13396.05"
        },
        {
            "id": 25,
            "name": "Melissa Wright",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "90%",
            "contract_end_day": "11/23/2016",
            "total_deals": 68,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$18805.32",
            "paid_amount": "$2426.06"
        },
        {
            "id": 26,
            "name": "Henry Reid",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "7/10/2016",
            "total_deals": 80,
            "payment_cycle": "annually",
            "outstanding_balance": "$2951.83",
            "paid_amount": "$3518.74"
        },
        {
            "id": 27,
            "name": "Betty Fuller",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "21%",
            "contract_end_day": "8/3/2016",
            "total_deals": 32,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$11282.37",
            "paid_amount": "$13261.10"
        },
        {
            "id": 28,
            "name": "George Cook",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "9%",
            "contract_end_day": "11/2/2016",
            "total_deals": 40,
            "payment_cycle": "annually",
            "outstanding_balance": "$11515.29",
            "paid_amount": "$8161.42"
        },
        {
            "id": 29,
            "name": "Ralph Warren",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "23%",
            "contract_end_day": "8/30/2016",
            "total_deals": 84,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$10552.35",
            "paid_amount": "$18892.61"
        },
        {
            "id": 30,
            "name": "Roger Moore",
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "23%",
            "contract_end_day": "3/1/2017",
            "total_deals": 23,
            "payment_cycle": "annually",
            "outstanding_balance": "$3327.15",
            "paid_amount": "$4345.77"
        }];

    constructTable();

    function constructTable() {

        var userCount = Object.keys(mockUsers).length;

        var column1HTML = "";
        var column2HTML = "";
        var column3HTML = "";
        var column4HTML = "";
        var column5HTML = "";
        var column6HTML = "";
        var column7HTML = "";

        for (var i = 0; i < userCount; i++) {
            var tempObject = mockUsers[i];
            var tempAbbreviatedName = abbervatieLastName(tempObject.name);
            var tempColumn1HTML = '<div class="row' + tempObject.id + ' row_header" ' + 'id="' + 'column1_row' + tempObject.id + '">' +
                '<input type="checkbox" id="modal' + tempObject.id + '" class="modal_user_profile">' +
                '<label for="modal' + tempObject.id + '">' +
                '<div>' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempObject.name + '</span>' +
                '<div class="user_profile">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempObject.name + '</span>' +
                '<svg class="icon icon-cross">' +
                '<use xlink:href="#icon-cross"></use>' +
                '</svg>' +
                '<div class="user_profile_details">' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt.</p>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt.</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</label>' +
                '</div>';

            column1HTML += tempColumn1HTML;

            var tempColumn2HTML = '<div class="row row' + tempObject.id + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.commission_rate +
                '</div>'

            column2HTML += tempColumn2HTML;

            var tempColumn3HTML = '<div class="row row' + tempObject.id + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.commission_rate +
                '</div>'

            column3HTML += tempColumn3HTML;

            var tempColumn4HTML = '<div class="row row' + tempObject.id + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.total_deals +
                '</div>'

            column4HTML += tempColumn4HTML;

            var tempColumn5HTML = '<div class="row row' + tempObject.id + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.payment_cycle +
                '</div>'

            column5HTML += tempColumn5HTML;

            var tempColumn6HTML = '<div class="row row' + tempObject.id + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.outstanding_balance +
                '</div>'

            column6HTML += tempColumn6HTML;

            var tempColumn7HTML = '<div class="row row' + tempObject.id + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.paid_amount +
                '</div>'

            column7HTML += tempColumn7HTML;
        }

        console.log(column1HTML);

        var tableContainer = document.getElementById('tableContainer');
        var tableHTML = '<div id="column1" class="header">' +
            '<div class="column_header" style="order: 0">' +
            'Name' +
            '</div>' +
            column1HTML +
            '</div>' +
            '<div id="column2" class="column content2">' +
            '<div class="column_header">' +
            'Commission Rate'+
            '<p id="column_header_drop_arrow_2" class="column_drop_arrow">'+
            '<svg class="icon icon-arrow-down1">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '<svg class="icon icon-arrow-down2">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '</p>'+
            '</div>'+
            column2HTML +
            '</div>'+
            '<div id="column3" class="column content3">'+
            '<div class="column_header">'+
            'Contract End Day'+
            '<p id="column_header_drop_arrow_3" class="column_drop_arrow">'+
            '<svg class="icon icon-arrow-down1">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '<svg class="icon icon-arrow-down2">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '</p>'+
            '</div>'+
            column3HTML +
            '</div>'+
            '<div id="column4" class="column content4">'+
            '<div class="column_header">'+
            'Total Deals'+
            '<p id="column_header_drop_arrow_4" class="column_drop_arrow">'+
            '<svg class="icon icon-arrow-down1">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '<svg class="icon icon-arrow-down2">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '</p>'+
            '</div>'+
            column4HTML +
            '</div>'+
            '<div id="column5" class="column content5">'+
            '<div class="column_header">'+
            'Payment Cycle'+
            '<p id="column_header_drop_arrow_5" class="column_drop_arrow">'+
            '<svg class="icon icon-arrow-down1">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '<svg class="icon icon-arrow-down2">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '</p>'+
            '</div>'+
            column5HTML +
            '</div>'+
            '<div id="column6" class="column content6">'+
            '<div class="column_header">'+
            'Outstanding Balance'+
            '<p id="column_header_drop_arrow_6" class="column_drop_arrow">'+
            '<svg class="icon icon-arrow-down1">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '<svg class="icon icon-arrow-down2">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '</p>'+
            '</div>'+
            column6HTML +
            '</div>'+
            '<div id="column7" class="column content7">'+
            '<div class="column_header">'+
            'Paid Amount'+
            '<p id="column_header_drop_arrow_7" class="column_drop_arrow">'+
            '<svg class="icon icon-arrow-down1">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '<svg class="icon icon-arrow-down2">'+
            '<use xlink:href="#icon-arrow-down2">'+
            '</use>'+
            '</svg>'+
            '</p>'+
            '</div>'+
            column7HTML +
            '</div>'

        tableContainer.innerHTML += tableHTML;

    };

    //Utility functions 
    function abbervatieLastName(username) {
        var splitString = username.split(' ');
        var abbervatiedName = splitString.slice(0, splitString.length - 1) + " " + splitString.pop().charAt(0) + ".";
        return abbervatiedName;
    }


});