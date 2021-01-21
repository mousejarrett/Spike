

let payed = false;

function createPrice(){
    let price = 0.00;

    const turkey = document.getElementById('turkeyClub').value;
    const tuna = document.getElementById('tuna').value;
    const grilledCheese = document.getElementById('grilledCheese').value;
    const blt = document.getElementById('blt').value;
    const eggSalad = document.getElementById('eggSalad').value;
    const grilledChicken = document.getElementById('grilledChicken').value;
    const friedChicken = document.getElementById('friedChicken').value;

    const cheeseBurger = document.getElementById('cheeseBurger').value;
    const baconCheeseBurger = document.getElementById('baconCheeseBurger').value;
    const steakBurger = document.getElementById('steakBurger').value;
    const veggieBurger = document.getElementById('veggieBurger').value;
    const clamChowder = document.getElementById('clamChowder').value;
    const potatoSoup = document.getElementById('potatoSoup').value;
    const vegetableSoup = document.getElementById('vegetableSoup').value;
    const cobbSalad = document.getElementById('cobbSalad').value;
    const caesarSalad = document.getElementById('caesarSalad').value;
    const chefSalad = document.getElementById('chefSalad').value;
    const sprite = document.getElementById('sprite').value;
    const coke = document.getElementById('coke').value;
    const tea = document.getElementById('tea').value;
    const coffee = document.getElementById('coffee').value;
    const fries = document.getElementById('fries').value;
    const chips = document.getElementById('chips').value;
    const potatoWedges = document.getElementById('potatoWedges').value;
    const cake = document.getElementById('cake').value;
    const donuts = document.getElementById('donuts').value;
    const cookie = document.getElementById('cookie').value;

    const database = firebase.database();

    const menuRef = database.ref('MENU');

    //BURGERS
    const burgerRef = menuRef.child('BURGERS');

    //BACON CHEESE BURGER
    const baconRef = burgerRef.child('BACON');
    let baconPrice = 0;
    const bacon = baconRef.on('value', snap => {
        baconPrice = snap.val();
    });

    if(baconCheeseBurger > 0){
        price += baconPrice * baconCheeseBurger;
    }

    //CHEESE BURGER
    const cheeseRef = burgerRef.child('CHEESE');
    let cheesePrice = 0;
    const cheese = cheeseRef.on('value', snap => {
        cheesePrice = snap.val();
    });

    if(cheeseBurger> 0){
        price += cheesePrice * cheeseBurger;
    }

    //STEAK BURGER
    const steakRef = burgerRef.child('STEAK');
    let steakPrice = 0;
    const steak = steakRef.on('value', snap => {
        steakPrice = snap.val();
    });

    if(steakBurger > 0){
        price += steakPrice * steakBurger;
    }

    //VEGGIE BURGER
    const veggieRef = burgerRef.child('VEGGIE');
    let veggiePrice = 0;
    const veggie = veggieRef.on('value', snap => {
        veggiePrice = snap.val();
    });

    if(veggieBurger > 0){
        price += cheesePrice * cheeseBurger;
    }




    //SANDWICHES
    const sandwichRef = menuRef.child('SANDWICHES');

    //BLT
    const bltRef = sandwichRef.child('BLT');
    let bltPrice = 0;
    console.log(bltPrice);
    const bltStuff = bltRef.on('value', snap => {
        bltPrice = snap.val();
    });

    if(blt > 0){
        price += bltPrice * blt;
    }

    //EGG
    const eggRef = sandwichRef.child('EGG');
    let eggPrice = 0;
    const egg = eggRef.on('value', snap => {
        eggPrice = snap.val();
    });

    if(eggSalad > 0){
        price += eggPrice * eggSalad;
    }

    //FRIED CHICKEN
    const friedChickenRef = sandwichRef.child('FRIEDCHICKEN');
    let friedChickenPrice = 0;
    const friedChickenStuff = friedChickenRef.on('value', snap => {
        friedChickenPrice = snap.val();
    });

    if(friedChicken > 0){
        price += friedChickenPrice * friedChicken;
    }

    //GRILLED CHICKEN
    const grilledChickenRef = sandwichRef.child('GRILLEDCHICKEN');
    let grilledChickenPrice = 0;
    const grilledChickenStuff = grilledChickenRef.on('value', snap => {
        grilledChickenPrice = snap.val();
    });

    if(grilledChicken > 0){
        price += grilledChickenPrice * grilledChicken;
    }

    //GRILLED CHEESE
    const grilledCheeseRef = sandwichRef.child('GRILLEDCHEESE');
    let grilledCheesePrice = 0;
    const grilledCheeseStuff = grilledCheeseRef.on('value', snap => {
        grilledCheesePrice = snap.val();
    });

    if(grilledCheese > 0){
        price += grilledCheesePrice * grilledCheese;
    }

    //TUNA
    const tunaRef = sandwichRef.child('TUNA');
    let tunaPrice = 0;
    const tunaStuff = tunaRef.on('value', snap => {
        tunaPrice = snap.val();
    });

    if(tuna > 0){
        price += tunaPrice * tuna;
    }

    //TURKEY
    const turkeyRef = sandwichRef.child('TURKEY');
    let turkeyPrice = 0;
    const turkeyStuff = turkeyRef.on('value', snap => {
        turkeyPrice = snap.val();
    });

    if(turkey > 0){
        price += turkeyPrice * turkey;
    }








    //DESSERTS
    const desertRef = menuRef.child('DESERTS');

    //CAKE
    const cakeRef = desertRef.child('CAKE');
    let cakePrice = 0;
    const cakeStuff = cakeRef.on('value', snap => {
        cakePrice = snap.val();
    });

    if(cake > 0){
        price += cakePrice * cake;
    }

    //COOKIE
    const cookieRef = desertRef.child('COOKIE');
    let cookiePrice = 0;
    const cookieStuff = cookieRef.on('value', snap => {
        cookiePrice = snap.val();
    });

    if(cookie > 0){
        price += cookiePrice * cookie;
    }

    //DONUTS
    const donutsRef = desertRef.child('DONUTS');
    let donutsPrice = 0;
    const donutsStuff = donutsRef.on('value', snap => {
        donutsPrice = snap.val();
    });

    if(donuts > 0){
        price += donutsPrice * donuts;
    }

    //DRINKS
    const drinkRef = menuRef.child('DRINKS');

    //COFFEE
    const coffeeRef = drinkRef.child('COFFEE');
    let coffeePrice = 0;
    const coffeeStuff = coffeeRef.on('value', snap => {
        coffeePrice = snap.val();
    });

    if(coffee > 0){
        price += coffeePrice * coffee;
    }

    //COKE
    const cokeRef = drinkRef.child('COKE');
    let cokePrice = 0;
    const cokeStuff = cokeRef.on('value', snap => {
        cokePrice = snap.val();
    });

    if(coke > 0){
        price += cokePrice * coke;
    }

    //SPRITE
    const spriteRef = drinkRef.child('SPRITE');
    let spritePrice = 0;
    const spriteStuff = spriteRef.on('value', snap => {
        spritePrice = snap.val();
    });

    if(sprite > 0){
        price += spritePrice * sprite;
    }

    //TEA
    const teaRef = drinkRef.child('TEA');
    let teaPrice = 0;
    const teaStuff = teaRef.on('value', snap => {
        teaPrice = snap.val();
    });

    if(tea > 0){
        price += teaPrice * tea;
    }

    //SALAD
    const saladRef = menuRef.child('SALADS');

    //CAESAR
    const caesarRef = saladRef.child('CAESAR');
    let caesarPrice = 0;
    const caesarStuff = caesarRef.on('value', snap => {
        caesarPrice = snap.val();
    });

    if(caesarSalad > 0){
        price += caesarPrice * caesarSalad;
    }

    //CHEF
    const chefRef = saladRef.child('CHEF');
    let chefPrice = 0;
    const chefStuff = chefRef.on('value', snap => {
        chefPrice = snap.val();
    });

    if(chefSalad > 0){
        price += chefPrice * chefSalad;
    }

    //COBB
    const cobbRef = saladRef.child('COBB');
    let cobbPrice = 0;
    const cobbStuff = cobbRef.on('value', snap => {
        cobbPrice = snap.val();
    });

    if(cobbSalad > 0){
        price += cobbPrice * cobbSalad;
    }

    //SIDES
    const sideRef  = menuRef.child('SIDES');

    //CHIPS
    const chipsRef = sideRef.child('CHIPS');
    let chipsPrice = 0;
    const chipsStuff = chipsRef.on('value', snap => {
        chipsPrice = snap.val();
    });

    if(chips > 0){
        price += chipsPrice * chips;
    }

    //FRIES
    const friesRef = sideRef.child('FRIES');
    let friesPrice = 0;
    const friesStuff = friesRef.on('value', snap => {
        friesPrice = snap.val();
    });

    if(fries > 0){
        price += friesPrice * fries;
    }

    //WEDGES
    const wedgesRef = sideRef.child('WEDGES');
    let wedgesPrice = 0;
    const wedgesStuff = wedgesRef.on('value', snap => {
        wedgesPrice = snap.val();
    });

    if(potatoWedges > 0){
        price += wedgesPrice * potatoWedges;
    }

    //SOUPS
    const soupRef = menuRef.child('SOUPS');

    //CLAM CHOWDER
    const clamRef = soupRef.child('CLAM');
    let clamPrice = 0;
    const clamStuff = clamRef.on('value', snap => {
        clamPrice = snap.val();
    });

    if(clamChowder > 0){
        price += clamPrice * clamChowder;
    }

    //POTATO
    const potatoRef = soupRef.child('POTATO');
    let potatoPrice = 0;
    const potatoStuff = potatoRef.on('value', snap => {
        potatoPrice = snap.val();
    });

    if(potatoSoup > 0){
        price += potatoPrice * potatoSoup;
    }

    //VEGETABLE
    const vegetableRef = soupRef.child('VEGETABLE');
    let vegetablePrice = 0;
    const vegetableStuff = vegetableRef.on('value', snap => {
        vegetablePrice = snap.val();
    });

    if(vegetableSoup > 0){
        price += vegetablePrice * vegetableSoup;
    }

    price = price * 1.065;
    price = price.toFixed(2);

    return price;

}

function createOrder(){

    var doc = new jsPDF();

    let username = getUsername(firebase.auth().currentUser);

    const turkey = document.getElementById('turkeyClub').value;
    const tuna = document.getElementById('tuna').value;
    const grilledCheese = document.getElementById('grilledCheese').value;
    const blt = document.getElementById('blt').value;
    const eggSalad = document.getElementById('eggSalad').value;
    const grilledChicken = document.getElementById('grilledChicken').value;
    const friedChicken = document.getElementById('friedChicken').value;
    const cheeseBurger = document.getElementById('cheeseBurger').value;
    const baconCheeseBurger = document.getElementById('baconCheeseBurger').value;
    const steakBurger = document.getElementById('steakBurger').value;
    const veggieBurger = document.getElementById('veggieBurger').value;
    const clamChowder = document.getElementById('clamChowder').value;
    const potatoSoup = document.getElementById('potatoSoup').value;
    const vegetableSoup = document.getElementById('vegetableSoup').value;
    const cobbSalad = document.getElementById('cobbSalad').value;
    const caesarSalad = document.getElementById('caesarSalad').value;
    const chefSalad = document.getElementById('chefSalad').value;
    const sprite = document.getElementById('sprite').value;
    const coke = document.getElementById('coke').value;
    const tea = document.getElementById('tea').value;
    const coffee = document.getElementById('coffee').value;
    const fries = document.getElementById('fries').value;
    const chips = document.getElementById('chips').value;
    const potatoWedges = document.getElementById('potatoWedges').value;
    const cake = document.getElementById('cake').value;
    const donuts = document.getElementById('donuts').value;
    const cookie = document.getElementById('cookie').value;

    const datePicker = document.getElementById('pickupDate').value;
    const time = document.getElementById('appt-time').value;

    doc.text('Order Receipt', 10, 10);
    doc.text(username, 150, 10);

    let hp = 20;

    if(turkey > 0){
        doc.text(turkey + '     Turkey Club', 10, hp);
        hp += 10;
    }
    if(tuna > 0){
        {doc.text(tuna + '     Tuna Fish Sandwich', 10, hp);}
        hp += 10;
    }
    if(grilledChicken > 0){
        doc.text(grilledChicken + '     Grilled Chicken Sandwich', 10, hp);
        hp += 10;
    }
    if(grilledCheese > 0){
        doc.text(grilledCheese + '     Grilled Cheese Sandwich', 10, hp);
        hp += 10;
    }
    if(blt > 0){
        doc.text(blt + '     BLT Sandwich', 10, hp);
        hp += 10;
    }
    if(eggSalad > 0){
        doc.text(eggSalad + '     Egg Salad Sandwich', 10, hp);
        hp += 10;
    }
    if(friedChicken > 0){
        doc.text(friedChicken + '     Fried Chicken Sandwich', 10, hp);
        hp += 10;
    }
    if(cheeseBurger > 0){
        doc.text(cheeseBurger + '     Cheese Burger', 10, hp);
        hp += 10;
    }
    if(baconCheeseBurger > 0){
        doc.text(baconCheeseBurger + '     Bacon Cheese Burger', 10, hp);
        hp += 10;
    }
    if(steakBurger > 0){
        doc.text(steakBurger + '     Steak Burger', 10, hp);
        hp += 10;
    }
    if(veggieBurger > 0){
        doc.text(veggieBurger + '     Veggie Burger', 10, hp);
        hp += 10;
    }
    if(clamChowder > 0){
        doc.text(clamChowder + '     Clam Chowder', 10, hp);
        hp += 10;
    }
    if(potatoSoup > 0){
        doc.text(potatoSoup + '     Potato Soup', 10, hp);
        hp += 10;
    }
    if(vegetableSoup > 0){
        doc.text(vegetableSoup + '     Vegetable Soup', 10, hp);
        hp += 10;
    }
    if(cobbSalad > 0){
        doc.text(cobbSalad + '     Cobb Salad', 10, hp);
        hp += 10;
    }
    if(caesarSalad > 0){
        doc.text(caesarSalad + '     Caesar Salad', 10, hp);
        hp += 10;
    }
    if(chefSalad > 0){
        doc.text(chefSalad + '     Chef Salad', 10, hp);
        hp += 10;
    }
    if(sprite > 0){
        doc.text(sprite + '     Sprite', 10, hp);
        hp += 10;
    }
    if(coke > 0){
        doc.text(coke + '     Coke', 10, hp);
        hp += 10;
    }
    if(tea > 0){
        doc.text(tea + '     Tea', 10, hp);
        hp += 10;
    }
    if(coffee > 0){
        doc.text(coffee + '     Coffee', 10, hp);
        hp += 10;
    }
    if(fries > 0){
        doc.text(fries + '     Fries', 10, hp);
        hp += 10;
    }
    if(chips > 0){
        doc.text(chips + '     Chips', 10, hp);
        hp += 10;
    }
    if(potatoWedges > 0){
        doc.text(potatoWedges + '     Potato Wedges', 10, hp);
        hp += 10;
    }
    if(cake > 0){
        doc.text(cake + '     Chocolate Cake', 10, hp);
        hp += 10;
    }
    if(donuts > 0){
        doc.text(donuts + '     Apple Cinnamon Donuts', 10, hp);
        hp += 10;
    }
    if(cookie > 0){
        doc.text(cookie + '     S\'mores Cookie', 10, hp);
        hp += 10;
    }

    hp += 10;

    doc.text("Pickup date: " + datePicker + "    Pickup Time: " + time, 10, hp);

    hp += 10;

    let price = createPrice();
    doc.text("Price: $" + price, 10, hp);

    if(price == 0){
        return null;
    } else{
        return doc;
    }

}

function getPrice(){
    const priceLabel = document.getElementById('price');
    let price = createPrice();
    if(price > 0) {
        priceLabel.innerText = price;
    }
}

function getOrder(){
    var doc = createOrder();

    doc.save('receipt.pdf');
}

function setDate(){
    var myDate = new Date();
    var prettyDate = myDate.toLocaleDateString('en-CA');
    console.log(prettyDate);
    const date = document.getElementById('pickupDate');
    date.value = prettyDate;
}

function getList(){

    var list = "";

    const turkey = document.getElementById('turkeyClub').value;
    const tuna = document.getElementById('tuna').value;
    const grilledCheese = document.getElementById('grilledCheese').value;
    const blt = document.getElementById('blt').value;
    const eggSalad = document.getElementById('eggSalad').value;
    const grilledChicken = document.getElementById('grilledChicken').value;
    const friedChicken = document.getElementById('friedChicken').value;
    const cheeseBurger = document.getElementById('cheeseBurger').value;
    const baconCheeseBurger = document.getElementById('baconCheeseBurger').value;
    const steakBurger = document.getElementById('steakBurger').value;
    const veggieBurger = document.getElementById('veggieBurger').value;
    const clamChowder = document.getElementById('clamChowder').value;
    const potatoSoup = document.getElementById('potatoSoup').value;
    const vegetableSoup = document.getElementById('vegetableSoup').value;
    const cobbSalad = document.getElementById('cobbSalad').value;
    const caesarSalad = document.getElementById('caesarSalad').value;
    const chefSalad = document.getElementById('chefSalad').value;
    const sprite = document.getElementById('sprite').value;
    const coke = document.getElementById('coke').value;
    const tea = document.getElementById('tea').value;
    const coffee = document.getElementById('coffee').value;
    const fries = document.getElementById('fries').value;
    const chips = document.getElementById('chips').value;
    const potatoWedges = document.getElementById('potatoWedges').value;
    const cake = document.getElementById('cake').value;
    const donuts = document.getElementById('donuts').value;
    const cookie = document.getElementById('cookie').value;

    if(turkey > 0){
        str = "{ " + turkey + " Turkey Club }";
        list = list.concat(str);
    }
    if(tuna > 0){
        str = "{ " + tuna + " Tuna Fish Sandwich }";
        list = list.concat(str);
    }
    if(grilledChicken > 0){
        str = "{ " + grilledChicken + " Grilled Chicken Sandwich }";
        list = list.concat(str);
    }
    if(grilledCheese > 0){
        str = "{ " + grilledCheese + " Grilled Cheese Sandwich }";
        list = list.concat(str);
    }
    if(blt > 0){
        str = "{ " + blt + " BLT Sandwich }";
        list = list.concat(str);
    }
    if(eggSalad > 0){
        str = "{ " + eggSalad + " Egg Salad Sandwich";
        list = list.concat(str);
    }
    if(friedChicken > 0){
        str = "{ " + friedChicken + " Fried Chicken Sandwich }";
        list = list.concat(str);
    }
    if(cheeseBurger > 0){
        str = "{ " + cheeseBurger + " Cheese Burger }";
        list = list.concat(str);
    }
    if(baconCheeseBurger > 0){
        str = "{ " + baconCheeseBurger + " Bacon Cheese Burger }";
        list = list.concat(str);
    }
    if(steakBurger > 0){
        str = "{ " + steakBurger + " Steak Burger }";
        list = list.concat(str);
    }
    if(veggieBurger > 0){
        str = "{ " + veggieBurger + " Veggie Burger }";
        list = list.concat(str);
    }
    if(clamChowder > 0){
        str = "{ " + clamChowder + " Clam Chowder }";
        list = list.concat(str);
    }
    if(potatoSoup > 0){
        str = "{ " + potatoSoup + " Potato Soup }";
        list = list.concat(str);
    }
    if(vegetableSoup > 0){
        str = "{ " + vegetableSoup + " Vegetable Soup }";
        list = list.concat(str);
    }
    if(cobbSalad > 0){
        str = "{ " + cobbSalad + " Cobb Salad }";
        list = list.concat(str);
    }
    if(caesarSalad > 0){
        str = "{ " + caesarSalad + "Caesar Salad }";
        list = list.concat(str);
    }
    if(chefSalad > 0){
        str = "{ " + chefSalad + " Chef Salad }";
        list = list.concat(str);
    }
    if(sprite > 0){
        str = "{ " + sprite + " Sprite }";
        list = list.concat(str);
    }
    if(coke > 0){
        str = "{ " + coke + "Coke }";
        list = list.concat(str);
    }
    if(tea > 0){
        str = "{ " + tea + " Tea }";
        list = list.concat(str);
    }
    if(coffee > 0){
        str = "{ " + coffee + " Coffee }";
        list = list.concat(str);
    }
    if(fries > 0){
        str = "{ " + fries + " Fries }";
        list = list.concat(str);
    }
    if(chips > 0){
        str = "{ " + chips + " Chips }";
        list = list.concat(str);
    }
    if(potatoWedges > 0){
        str = "{ " + potatoWedges + " Potato Wedges }";
        list = list.concat(str);
    }
    if(cake > 0){
        str = "{ " + cake + " Chocolate Cake }";
        list = list.concat(str);
    }
    if(donuts > 0){
        str = "{ " + donuts + " Apple Cinnamon Donuts }";
        list = list.concat(str);
    }
    if(cookie > 0){
        str = "{ " + cookie + " S\'mores Cookie }";
        list = list.concat(str);
    }

    return list;
}

function pretendPayButton(){
    payed = true;
}

function submitOrder(){
    //doc.save('receipt.pdf');
    var storageRef = firebase.storage().ref();

    let username = getUsername(firebase.auth().currentUser);

    let price = createPrice();

    let order = getList();

    if(price > 0) {
        var postData = {
            USERNAME: username,
            PRICE: price,
            ORDER: order,
            PAYMENT: payed
        };
        window.location.href = "index.html";
        window.alert("Order submitted!");
    }

    var databaseRef = firebase.database().ref();
    var newHouseRef = databaseRef.child("ORDERS").push();
    newHouseRef.set(postData);


}


