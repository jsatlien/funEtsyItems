// var priceAverage = function (items) {
//   var newPriceArray = []
//   for (var count = 1; count < items.length; count++) {
//     var priceArray = items[count].prices.map();
//     newPriceArray.push(priceArray)
//   };
// };
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

// answer1.innerHTML = priceSum / items.length;
