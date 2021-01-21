
var orderVal;

jQuery(document).ready(function($) {
    "use strict";
    $(".loader").delay(1).fadeOut("slow");
    $("#overlayer").delay(1).fadeOut("slow");

    let database = firebase.database();
    let ordersRef = database.ref('ORDERS');
    ordersRef.on('value', getOrders);
    let orderCount = 0;

    function getOrders(data) {
        let orders = data.val();
        let keys = Object.keys(orders);
        let result = "";
        let ordersCount = 0;
        for (let i = 0; i < keys.length; i++) {

            let k = keys[i];

            let ORDER = orders[k].ORDER;
            let PRICE = orders[k].PRICE;
            let USERNAME = orders[k].USERNAME;
            orderVal = k;

            result += addToOrdersArea(ORDER, PRICE, USERNAME, k);
            orderCount++;
            console.log(ORDER);
            document.getElementById("orders-area").innerHTML = result;

        }
    }


    function addToOrdersArea(order, price, username, key) {
        console.log(key);
        let result = "<div class='col-xl-9 mx-auto'>" +
            "<p>" + order + ", <br>$" + price + ", <br>" + username + " </p>"+
            "</div> <br>" ;
        return result;
    }

    function event() {
        let database = firebase.database();
        let ordersRef = database.ref('ORDERS');
        ordersRef.on('value', snap => {
            getOrders(snap);
        });
    }

    // document.getElementById("sendMessageButton").addEventListener('click', e => {
    //     event();
    // });

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            event();
        }
    });

});