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

// var numbers = data.numbers;
var stringNmbers = data.stringNumbers;

function returnInt(str){
    return parseInt(str, 10);
}
var num = stringNmbers.map(returnInt);

console.log(num);

// stringNmbers.map(function(string){
//     //console.log(string);
//     return parseInt(string, 10);//꼭 뒤에 십진수 사용할것
// });
//map 각각의 인자값에 추가(for문을 돌리지 않더라도)
// numbers.map(function(number){
//     return number+'만원';
// });
//filter
// var above50 = numbers.filter(function(number){
//     return number >= 50;
// });
//forEach
// numbers.forEach(function(element, index, arr){
//     console.log('element:', element);
//     console.log('index:', index);
//     console.log('arr:', arr);
// });

