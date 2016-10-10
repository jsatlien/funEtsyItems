// var priceAverage = function (items) {
//   var newPriceArray = []
//   for (var count = 1; count < items.length; count++) {
//     var priceArray = items[count].prices.map();
//     newPriceArray.push(priceArray)
//   };
// };

var priceAverage = function (items) {
  for (var i = 0; i < items.length; i++) {
    var priceArray = items[i].price;
    return priceArray.length;
  };
};
