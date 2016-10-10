// 1. Find the average price of every item on the list. -
var answer1 = document.getElementById('answer1')

var priceAverage = function (items) {
  var priceArray = [];
  for (var i = 0; i < items.length; i++) {
    priceArray.push(items[i].price);
  };
  var priceSum = 0;
  for (var c = 0; c < priceArray.length; c++) {
  priceSum += priceArray[c];
  };
  return Math.round((priceSum / items.length)*100)/100;
};
  answer1.innerHTML = "Average Price: " + priceAverage (items);

// 2.  Show me how to get an array of items that cost between $14.00 and $18.00 USD

var answer2 = document.getElementById('answer2');

var speciCost = function (itemArr) {
  var speciList = []
  for (var i = 0; i < items.length; i++) {
    if (itemArr[i].price > 14 && itemArr[i].price < 18) {
      speciList.push(itemArr[i].title);
    };
  };
  return speciList;
};
answer2.innerHTML = speciCost(items).join("<p>");

// 3. Which item has a "GBP" currency code? Display it's name and price. -

var answer3 = document.getElementById("answer3");

var gbpArray = items.filter(function (x) {
  return x.currency_code === "GBP";
});
  gbpArray.forEach(function (x) {
    answer3.innerHTML += String(x.title) + ", " + "Price: " + String(x.price) + " pounds"
  });

// 4. Display a list of all items who are made of wood. (.materials)

var answer4 = document.getElementById("answer4")

var woodArray = items.filter(function (x) {
    return x.materials.includes("wood");
  });
    woodArray.forEach( function (x) {
      answer4.innerHTML += "<div>" + String(x.title) + "</div>";
    });

// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var answer5 = document.getElementById('answer5')

var eightMats = items.filter(function (x) {
    return x.materials.length >= 8; });
    console.log(eightMats);

    eightMats.forEach( function (x) {
      answer5.innerHTML += "<p>" + x.title + "</p>" + "<div>" + "Materials: " + x.materials + "</div>";
    });

// 6. How many items were made by their sellers? @ = 18

var answer6 = document.getElementById('answer6')

var homeMade = items.filter(function (x) {
    return x.who_made === "i_did";
});
    answer6.innerHTML = String(homeMade.length) + " were made by their seller.";
