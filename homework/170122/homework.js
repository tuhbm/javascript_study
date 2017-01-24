var data = {
    "fruits":[{
        "name":"사과",
        "quantity":30,
        "price":500
    }, {
        "name":"바나나",
        "quantity":40,
        "price":1500
    }, {
        "name":"딸기",
        "quantity":25,
        "price":2000
    }, {
        "name":"포도",
        "quantity":55,
        "price":1800
    }, {
        "name":"키위",
        "quantity":100,
        "price":4200
    }, {
        "name":"수박",
        "quantity":15,
        "price":9800
    }, {
        "name":"감",
        "quantity":250,
        "price":2300
    }],
    "numbers":[50, 20, 123, 12, 33, 46, 70, 21, 56, 560],
    "stringNumbers":["50", "20", "123", "12", "33", "46", "70", "21", "56", "560"]
};

var fruits = data.fruits;
var priceObj = fruits.filter(function(fruits){
    var result = fruits['price'] >= 4000;
    console.log(result);

    // for (var i = 0; i < result.length; i++) {
    //     result += result[i];
    // }
    return result;
});

// function searchPrice(){
//
//     var fruits = fruitsData[0];
//     console.log(fruits);
//     var result = [];
//     // target.filter(function(){
//     //     if(target.price >= 4000) result += target.arguments
//     //     return result;
//     // });
//     for (var i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
//         console.log(fruits[i].price);
//         if(fruits[i].price >= 4000) result += fruits[i];
//     }
//     console.log(result);
//
// }
// searchPrice();


// var above50 = numbers.filter(function(number){
//     return number >= 50;
// });