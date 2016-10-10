// var priceAverage = function (items) {
//   var newPriceArray = []
//   for (var count = 1; count < items.length; count++) {
//     var priceArray = items[count].prices.map();
//     newPriceArray.push(priceArray)
//   };
// };

// 1. Find the average price of every item on the list. -

var priceAverage = function (items) {
  var answer1 = document.getElementById('answer1')
  var priceArray = [];
  for (var i = 0; i < items.length; i++) {
    priceArray.push(items[i].price);
  };
  var priceSum = 0;
  for (var c = 0; c < priceArray.length; c++) {
  priceSum += priceArray[c];
  };
  return priceSum / items.length;
};
  answer1.innerHTML = priceAverage (items);

// 2.  Show me how to get an array of items that cost between $14.00 and $18.00 USD
var answer2 = document.getElementById('answer2');

var speciCost = function (item) {
  for (var i = 0; i < items.length; i++) {
    var speciList = []
    if (item[i].price > 14 && item[i].price < 18) {
      speciList.push(item[i].title);
    };
  };
  return String(speciList[0]) + String(speciList[1]) + String(speciList[3]);
};
answer2.innerHTML = speciCost (items)
