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

var stringNumbers = data.stringNumbers;

function returnInt(str){
    return parseInt(str, 10);
}
var num = stringNumbers.map(returnInt);

console.log(num);

var numbers = data.numbers;
var convertToMoney = function(number){
    return number+'만원';
};

var money = numbers.map(convertToMoney);*/


var above50 = numbers.filter(function(number){
    return number >= 50;
});

/*var sortedNumbers = numbers.sort(function(a,b){
    return a < b;
});*/

/*numbers.forEach(function(element, index, arr){
    console.log('element: ', element);
    console.log('index: ', index);
    console.log('arr : ', arr);
});*/





















