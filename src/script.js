/**
 * Created by Neverland on 3/27/17.
 */



(function () {

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

    var mockUsersCopy = mockUsers.slice();

    createSearchTypingListener();
    refreshTableDOM(mockUsers);

    function constructTable(userArray) {

        var userCount = Object.keys(userArray).length;

        var column1HTML = "";
        var column2HTML = "";
        var column3HTML = "";
        var column4HTML = "";
        var column5HTML = "";
        var column6HTML = "";
        var column7HTML = "";

        for (var i = 0; i < userCount; i++) {
            var tempObject = userArray[i];
            var tempAbbreviatedName = abbreviateLastName(tempObject.name);
            var tempColumn1HTML = '<div class="row' + (i + 1) + ' row_header ' + 'row"' + 'id="' + 'column1_row' + (i + 1) + '" draggable="true">' +
                '<input type="checkbox" id="modal' + tempObject.id + '" class="modal_user_profile">' +
                '<label for="modal' + tempObject.id + '">' +
                '<div class="row_order_index">' +
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

            var tempColumn2HTML = '<div class="row row' + (i + 1) + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.commission_rate +
                '</div>'

            column2HTML += tempColumn2HTML;

            var tempColumn3HTML = '<div class="row row' + (i + 1) + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.contract_end_day +
                '</div>'

            column3HTML += tempColumn3HTML;

            var tempColumn4HTML = '<div class="row row' + (i + 1) + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.total_deals +
                '</div>'

            column4HTML += tempColumn4HTML;

            var tempColumn5HTML = '<div class="row row' + (i + 1) + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.payment_cycle +
                '</div>'

            column5HTML += tempColumn5HTML;

            var tempColumn6HTML = '<div class="row row' + (i + 1) + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.outstanding_balance +
                '</div>'

            column6HTML += tempColumn6HTML;

            var tempColumn7HTML = '<div class="row row' + (i + 1) + '">' +
                '<img class="avatar" src="' + tempObject.img_url + '">' +
                '<span>' + tempAbbreviatedName + '</span>' + tempObject.paid_amount +
                '</div>'

            column7HTML += tempColumn7HTML;
        }

        var tableContainer = document.getElementById('tableContainer');
        var tableHTML = '<div id="column1" class="header">' +
            '<div class="column_header" style="order: 0">' +
            'Name' +
            '<p class="sort sort_asc" id="sort_name_alpha_asc">' +
            '<svg class="icon icon-sort_by_alpha" id="icon_sort_by_alpha_name">' +
            '<use xlink:href="#icon-sort_by_alpha"></use></svg></p>' +
            '</div>' +
            column1HTML +
            '</div>' +
            '<div id="column2" class="column content2" draggable="true">' +
            '<div class="column_header">' +
            'Commission Rate' +
            '<p id="column_header_drop_arrow_7" class="numeric_sort_icon">' +
            '<svg class="icon icon-sort-numeric-asc" id="icon_sort_by_rate"><use xlink:href="#icon-sort-numeric-asc"></use></svg>' +
            '</p>' +
            '</div>' +
            column2HTML +
            '</div>' +
            '<div id="column3" class="column content3" draggable="true">' +
            '<div class="column_header">' +
            'Contract End Day' +
            '<p id="column_header_drop_arrow_7" class="numeric_sort_icon">' +
            '<svg class="icon icon-sort-numeric-asc" id="icon_sort_by_date"><use xlink:href="#icon-sort-numeric-asc"></use></svg>' +
            '</p>' +
            '</div>' +
            column3HTML +
            '</div>' +
            '<div id="column4" class="column content4" draggable="true">' +
            '<div class="column_header">' +
            'Total Deals' +
            '<p id="column_header_drop_arrow_7" class="numeric_sort_icon">' +
            '<svg class="icon icon-sort-numeric-asc" id="icon_sort_by_deals"><use xlink:href="#icon-sort-numeric-asc"></use></svg>' +
            '</p>' +
            '</div>' +
            column4HTML +
            '</div>' +
            '<div id="column5" class="column content5" draggable="true">' +
            '<div class="column_header">' +
            'Payment Cycle' +
            '<p class="sort sort_asc" id="sort_name_alpha_asc">' +
            '<svg class="icon icon-sort_by_alpha" id="icon_sort_by_cycle">' +
            '<use xlink:href="#icon-sort_by_alpha"></use></svg></p>' +
            '</div>' +
            column5HTML +
            '</div>' +
            '<div id="column6" class="column content6" draggable="true">' +
            '<div class="column_header">' +
            'Balance' +
            '<p id="column_header_drop_arrow_7" class="numeric_sort_icon">' +
            '<svg class="icon icon-sort-numeric-asc" id="icon_sort_by_out_balance"><use xlink:href="#icon-sort-numeric-asc"></use></svg>' +
            '</p>' +
            '</div>' +
            column6HTML +
            '</div>' +
            '<div id="column7" class="column content7" draggable="true">' +
            '<div class="column_header">' +
            'Paid Amount' +
            '<p id="column_header_drop_arrow_7" class="numeric_sort_icon">' +
            '<svg class="icon icon-sort-numeric-asc" id="icon_sort_by_paid_amount"><use xlink:href="#icon-sort-numeric-asc"></use></svg>' +
            '</p>' +
            '</div>' +
            column7HTML +
            '</div>'

        tableContainer.innerHTML += tableHTML;

    };

    //Utility functions 
    function abbreviateLastName(username) {
        var splitString = username.split(' ');
        var abbreviatedName = splitString.slice(0, splitString.length - 1) + " " + splitString.pop().charAt(0) + ".";
        return abbreviatedName;
    }

    function destroyTableDOM() {
        var tableContainer = document.getElementById('tableContainer');
        tableContainer.innerHTML = ""
    }

    function refreshTableDOM(userArray) {
        destroyTableDOM();
        constructTable(userArray);
        createSortingListeners();
        createDragAndDropListener();
        setInitialRowOrderTag();
    }

    /**
     * Sorting Feature
     */

    //Create a Listener for Sorting Clicks
    
    function createSortingListeners() {
        var SortByAlphaTempItem = document.getElementById("icon_sort_by_alpha_name");
        SortByAlphaTempItem.addEventListener("click", function () {
            clickEventHandlerForAlphaSort();
        }, false);

        var SortByRateTempItem = document.getElementById("icon_sort_by_rate");
        SortByRateTempItem.addEventListener("click", function () {
            clickEventHandlerForRateSort();
        }, false);

        var SortByDateTempItem = document.getElementById("icon_sort_by_date");
        SortByDateTempItem.addEventListener("click", function () {
            clickEventHandlerForDateSort();
        }, false);

        var SortByDealTempItem = document.getElementById("icon_sort_by_deals");
        SortByDealTempItem.addEventListener("click", function () {
            clickEventHandlerForDealSort();
        }, false);

        var SortByCycleTempItem = document.getElementById("icon_sort_by_cycle");
        SortByCycleTempItem.addEventListener("click", function () {
            clickEventHandlerForCycleSort();
        }, false);

        var SortByOutBlaTempItem = document.getElementById("icon_sort_by_out_balance");
        SortByOutBlaTempItem.addEventListener("click", function () {
            clickEventHandlerForBlanceSort();
        }, false);

        var SortByPaidTempItem = document.getElementById("icon_sort_by_paid_amount");
        SortByPaidTempItem.addEventListener("click", function () {
            clickEventHandlerForAmountSort();
        }, false);
    }


    //Sort Name
    function sortNameAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if (a['name'] > b['name']) return 1;
            if (a['name'] < b['name']) return -1;
            return 0;
        });
    }

    function sortNameDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if (a['name'] < b['name']) return 1;
            if (a['name'] > b['name']) return -1;
            return 0;
        });
    }

    var clickAlphaSortIconTimes = 0;
    function clickEventHandlerForAlphaSort() {
        clickAlphaSortIconTimes++;
        if (clickAlphaSortIconTimes % 3 == 1) {
            sortNameAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_alpha_name").style.color = "#51d0ef";
        } else if (clickAlphaSortIconTimes % 3 == 2) {
            sortNameDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_alpha_name").style.color = "#ff9191";
        } else if (clickAlphaSortIconTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_alpha_name").style.color = "#545454";
        }
    }

    //Sort Rate
    function sortRateAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseInt((a[('commission_rate')].replace('%', '')))) > (parseInt((b[('commission_rate')].replace('%', ''))))) return 1;
            if ((parseInt((a[('commission_rate')].replace('%', '')))) < (parseInt((b[('commission_rate')].replace('%', ''))))) return -1;
            return 0;
        });

    }

    function sortRateDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseInt((a[('commission_rate')].replace('%', '')))) < (parseInt((b[('commission_rate')].replace('%', ''))))) return 1;
            if ((parseInt((a[('commission_rate')].replace('%', '')))) > (parseInt((b[('commission_rate')].replace('%', ''))))) return -1;
            return 0;
        });
    }

    var clickRateSortTimes = 0;
    function clickEventHandlerForRateSort() {
        clickRateSortTimes++;
        if (clickRateSortTimes % 3 == 1) {
            sortRateAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_rate").style.color = "#51d0ef";
        } else if (clickRateSortTimes % 3 == 2) {
            sortRateDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_rate").style.color = "#ff9191";
        } else if (clickRateSortTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_rate").style.color = "#545454";
        }
    }

    //Sort Date
    function sortDateAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((Date.parse((a[('contract_end_day')]))) > (Date.parse((b[('contract_end_day')])))) return 1;
            if ((Date.parse((a[('contract_end_day')]))) < (Date.parse((b[('contract_end_day')])))) return -1;
            return 0;
        });

    }

    function sortDateDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((Date.parse((a[('contract_end_day')]))) < (Date.parse((b[('contract_end_day')])))) return 1;
            if ((Date.parse((a[('contract_end_day')]))) > (Date.parse((b[('contract_end_day')])))) return -1;
            return 0;
        });
    }

    var clickDateSortTimes = 0;
    function clickEventHandlerForDateSort() {
        clickDateSortTimes++;
        if (clickDateSortTimes % 3 == 1) {
            sortDateAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_date").style.color = "#51d0ef";
        } else if (clickDateSortTimes % 3 == 2) {
            sortDateDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_date").style.color = "#ff9191";
        } else if (clickDateSortTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_date").style.color = "#545454";
        }
    }

    //Sort Deals
    function sortDealAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseInt((a[('total_deals')]))) > (parseInt((b[('total_deals')])))) return 1;
            if ((parseInt((a[('total_deals')]))) < (parseInt((b[('total_deals')])))) return -1;
            return 0;
        });

    }

    function sortDealDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseInt((a[('total_deals')]))) < (parseInt((b[('total_deals')])))) return 1;
            if ((parseInt((a[('total_deals')]))) > (parseInt((b[('total_deals')])))) return -1;
            return 0;
        });
    }

    var clickDealSortTimes = 0;
    function clickEventHandlerForDealSort() {
        clickDealSortTimes++;
        if (clickDealSortTimes % 3 == 1) {
            sortDealAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_deals").style.color = "#51d0ef";
        } else if (clickDealSortTimes % 3 == 2) {
            sortDealDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_deals").style.color = "#ff9191";
        } else if (clickDealSortTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_deals").style.color = "#545454";
        }
    }

    //Sort Cycle
    function sortCycleAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if (a['payment_cycle'] > b['payment_cycle']) return 1;
            if (a['payment_cycle'] < b['payment_cycle']) return -1;
            return 0;
        });
    }

    function sortCycleDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if (a['payment_cycle'] < b['payment_cycle']) return 1;
            if (a['payment_cycle'] > b['payment_cycle']) return -1;
            return 0;
        });
    }

    var clickCycleSortIconTimes = 0;
    function clickEventHandlerForCycleSort() {
        clickCycleSortIconTimes++;
        if (clickCycleSortIconTimes % 3 == 1) {
            sortCycleAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_cycle").style.color = "#51d0ef";
        } else if (clickCycleSortIconTimes % 3 == 2) {
            sortCycleDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_cycle").style.color = "#ff9191";

        } else if (clickCycleSortIconTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_cycle").style.color = "#545454";
        }
    }

    //Sort Balance
    function sortBalanceAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) > (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return 1;
            if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) < (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return -1;
            return 0;
        });

    }

    function sortBalanceDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) < (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return 1;
            if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) > (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return -1;
            return 0;
        });
    }

    var clickBalanceSortTimes = 0;
    function clickEventHandlerForBlanceSort() {
        clickBalanceSortTimes++;
        if (clickBalanceSortTimes % 3 == 1) {
            sortBalanceAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_out_balance").style.color = "#51d0ef";
        } else if (clickBalanceSortTimes % 3 == 2) {
            sortBalanceDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_out_balance").style.color = "#ff9191";

        } else if (clickBalanceSortTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_out_balance").style.color = "#545454";
        }
    }

    //Sort Paid Amount
    function sortPaidAmntAsc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseFloat((a[('paid_amount')].replace('$', '')))) > (parseFloat((b[('paid_amount')].replace('$', ''))))) return 1;
            if ((parseFloat((a[('paid_amount')].replace('$', '')))) < (parseFloat((b[('paid_amount')].replace('$', ''))))) return -1;
            return 0;
        });

    }

    function sortPaidAmntDesc(mockUsers) {
        mockUsers.sort(function (a, b) {
            if ((parseFloat((a[('paid_amount')].replace('$', '')))) < (parseFloat((b[('paid_amount')].replace('$', ''))))) return 1;
            if ((parseFloat((a[('paid_amount')].replace('$', '')))) > (parseFloat((b[('paid_amount')].replace('$', ''))))) return -1;
            return 0;
        });
    }

    var clickAmountSortTimes = 0;
    function clickEventHandlerForAmountSort() {
        clickAmountSortTimes++;
        if (clickAmountSortTimes % 3 == 1) {
            sortPaidAmntAsc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_paid_amount").style.color = "#51d0ef";
        } else if (clickAmountSortTimes % 3 == 2) {
            sortPaidAmntDesc(mockUsers);
            refreshTableDOM(mockUsers);
            document.getElementById("icon_sort_by_paid_amount").style.color = "#ff9191";

        } else if (clickAmountSortTimes % 3 == 0) {
            refreshTableDOM(mockUsersCopy);
            document.getElementById("icon_sort_by_paid_amount").style.color = "#545454";
        }
    }





    /**
     * Searching Feature
     */

    //Create a Listener for Typing
    function createSearchTypingListener() {
        var searchInputDOM = document.getElementById("search_input");
        searchInputDOM.addEventListener("keyup", function () {
            searchUserArray(mockUsers);
        }, false);
    }

    function getSearchInput() {
        return document.getElementById('search_input').value;
    }

    function searchUserArray(mockUsers) {
        var tempString = getSearchInput().toUpperCase();
        var templeArray = [];

        for (var i = 0; i < mockUsers.length; i++) {
            if (mockUsers[i]['name'].substring(0, tempString.length).toUpperCase() == tempString) {
                templeArray.push(mockUsers[i]);
            }
        }
        refreshTableDOM(templeArray);
    }
    


    /**
     * Dragging Feature
     */

    //Create Listeners for drag & drop
    function createDragAndDropListener() {
        
        //Create Listeners for Columns
        var tempColumns = document.getElementsByClassName('column');
        for (var i = 0; i < tempColumns.length; i++) {
            tempColumns[i].addEventListener('dragstart', handleColumnDragStart, false);
            tempColumns[i].addEventListener('dragenter', handleColumnDragEnter, false)
            tempColumns[i].addEventListener('dragover', handleColumnDragOver, false);
            tempColumns[i].addEventListener('dragleave', handleColumnDragLeave, false);
            tempColumns[i].addEventListener('drop', handleColumnDrop, false);
            tempColumns[i].addEventListener('dragend', handleColumnDragEnd, false);
        }
        //Create Listeners for Rows
        var tempRows = document.getElementsByClassName('row_header');
        for (var i = 0; i < tempRows.length; i++) {
            tempRows[i].addEventListener('dragstart', handleRowDragStart, false);
            tempRows[i].addEventListener('dragenter', handleRowDragEnter, false)
            tempRows[i].addEventListener('dragover', handleRowDragOver, false);
            tempRows[i].addEventListener('dragleave', handleRowDragLeave, false);
            tempRows[i].addEventListener('drop', handleRowDrop, false);
            tempRows[i].addEventListener('dragend', handleRowDragEnd, false);
        }
    }


    //Handle Column Drag Events
    //Get Current Drag Item Id to avoid it be invoked by other events
    var dragColumnId = "";
    var dragColumnDOM = null;
    function handleColumnDragStart(e) {
        this.style.opacity = 0;
        this.style.width = "0px";
        this.style.padding = "0px";
        this.style.borderWidth = "0px";
        this.style.borderWidth = "0px";
        this.style.transition = "all 0.4s ease";

        dragColumnId = document.getElementById(this.id).id;
        dragColumnDOM = this;
        e.dataTransfer.effectAllowed = 'all';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleColumnDragEnter() {
        if (document.getElementById(this.id).id != dragColumnId) {
            this.style.opacity = 0.2;
            this.style.transition = "all 0.4s ease";
        }
    }

    //Disable DragOver
    function handleColumnDragOver() {
        event.preventDefault();
        if (document.getElementById(this.id).id != dragColumnId) {
            this.style.opacity = 0.2;
            this.style.transition = "all 0.4s ease";
        }
        return false;
    }

    function handleColumnDragLeave() {
        if (document.getElementById(this.id).id != dragColumnId) {
            this.style.opacity = 1;
            this.style.transition = "all 0.4s ease";
        }
    }

    function handleColumnDrop(e) {
        event.preventDefault();
        this.style.opacity = 1;
        this.style.transition = "all 0.4s ease";

        if (dragColumnDOM != this) {
            dragColumnDOM.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
    }

    function handleColumnDragEnd() {
        this.style.opacity = 1;
        this.style.width = "160px";
        this.style.transition = "all 0.6s ease";

        createSortingListeners();
    }


    //Handle Row Drag Events
    //Create Row Order Index inside each row header dom.
    function setInitialRowOrderTag() {
        var allRowHeader = document.getElementsByClassName('row_header');
        var rowOrderIndex = 1;

        for (var i = 0; i < allRowHeader.length; i++) {
            allRowHeader[i].style.order = rowOrderIndex;
            rowOrderIndex++;
        }
    }

    function getUpdatedRowOrderTag() {
        var UpdatedRowOrderTag = new Array();
        var allRowHeader = document.getElementsByClassName('row_header');

        for (var i = 0; i < allRowHeader.length; i++) {
            var tempRowHeader = window.getComputedStyle(allRowHeader[i]);
            UpdatedRowOrderTag.push(parseInt(tempRowHeader.getPropertyValue('order')));
        }
        return UpdatedRowOrderTag;
    }

    var dragRowId = "";
    var dragRowOrder = 0;
    var dragRowDOM;
    function handleRowDragStart(e) {
        dragRowDOM = this;

        //Get row idea
        dragRowId = document.getElementById(this.id).id;

        //Select and Hide the row header
        this.style.opacity = 0;
        this.style.height = "0px";
        this.style.paddingTop = "0px";
        this.style.paddingBottom = "0px";
        this.style.borderWidth = "0px";
        this.style.transition = "all 0.4s ease";

        //Select and Hide other cells in the same row
        var draggedRow = document.getElementsByClassName('row' + (dragRowId).split("row")[1]);
        for (var i = 1; i < draggedRow.length; i++) {
            draggedRow[i].style.opacity = 0;
            draggedRow[i].style.height = "0px";
            draggedRow[i].style.padding = "0px";
            draggedRow[i].style.borderWidth = "0px";
            draggedRow[i].style.transition = "all 0.4s ease";
        }

        dragRowOrder = parseInt((window.getComputedStyle(this)).getPropertyValue('order'));
    }

    function handleRowDragEnter() {
        if (document.getElementById(this.id).id != dragRowId) {
            this.style.opacity = 0.2;
            this.style.transition = "all 0.4s ease";

            var draggedRow = document.getElementsByClassName('row' + (document.getElementById(this.id).id).split("row")[1]);
            for (var i = 1; i < draggedRow.length; i++) {
                draggedRow[i].style.opacity = 0.2;
                draggedRow[i].style.transition = "all 0.4s ease";
            }
        }
    }

    function handleRowDragOver(e) {
        event.preventDefault();
        if (document.getElementById(this.id).id != dragRowId) {
            this.style.opacity = 0.2;
            this.style.transition = "all 0.4s ease";

            var draggedRow = document.getElementsByClassName('row' + (document.getElementById(this.id).id).split("row")[1]);
            for (var i = 1; i < draggedRow.length; i++) {
                draggedRow[i].style.opacity = 0.2;
                draggedRow[i].style.transition = "all 0.4s ease";
            }
        }
        return false;
    }

    function handleRowDragLeave() {
        if (document.getElementById(this.id).id != dragRowId) {
            this.style.opacity = 1;
            this.style.transition = "all 0.4s ease";

            var draggedRow = document.getElementsByClassName('row' + (document.getElementById(this.id).id).split("row")[1]);
            for (var i = 1; i < draggedRow.length; i++) {
                draggedRow[i].style.opacity = 1;
                draggedRow[i].style.transition = "all 0.4s ease";
            }
        }
    }


    function handleRowDrop(e) {
        event.preventDefault();
        this.style.opacity = 1;
        this.style.transition = "all 0.4s ease";

        //get drop location
        var dropRowId = document.getElementById(this.id).id;

        var droppedRow = document.getElementsByClassName('row' + (dropRowId).split("row")[1]);
        for (var i = 1; i < droppedRow.length; i++) {
            droppedRow[i].style.opacity = 1;
            droppedRow[i].style.height = "16px";
            droppedRow[i].style.padding = "10px";
            droppedRow[i].style.borderWidth = "1px";
            droppedRow[i].style.transition = "all 0.4s ease";
        }

        //get drop location order
        var dropRowOrder = parseInt((window.getComputedStyle(this)).getPropertyValue('order'));
        //swap the order between drag row and drop row
        this.style.order = dragRowOrder;
        dragRowDOM.style.order = dropRowOrder;

        //Update orders for all cells in other columns
        var updatedRowOrder = getUpdatedRowOrderTag();

        var allColumns = new Array();
        for (var i = 2; i < 8; i++){
            allColumns.push("column" + i);
        }

        var tempRows = document.getElementById("column2").childNodes;

        // for (var i = 0; i < allColumns.length; i++) {
        //     var tempRows = document.getElementById("column2").childNodes;
        //     for (var j = 0; j < 30; j++) {
        //         var tmpItem = tempRows[j + 1]
        //         tmpItem.style.order = updatedRowOrder[j];
        //     }
        // }

        for (var i = 0; i < updatedRowOrder.length; i++) {
            var otherRows = document.getElementsByClassName('row' + (i + 1));
            for (var j = 0; j < otherRows.length; j++) {
                var tmpItem = otherRows[j];
                tmpItem.style.order = updatedRowOrder[i];
            }
        }
    }

    function handleRowDragEnd() {
        this.style.opacity = 1;
        this.style.height = "28px";
        this.style.padding = "4px";
        this.style.borderWidth = "1px";
        this.style.transition = "all 0.4s ease";

        var draggedRow = document.getElementsByClassName('row' + (dragRowId).split("row")[1]);
        for (var i = 1; i < draggedRow.length; i++) {
            draggedRow[i].style.opacity = 1;
            draggedRow[i].style.height = "16px";
            draggedRow[i].style.padding = "10px";
            draggedRow[i].style.borderWidth = "1px";
            draggedRow[i].style.transition = "all 0.4s ease";
        }


    }
})();