var data = {
    "fruits":[{
        "name":"사과",
        "quantity":30,
        "price":500,
        "country of origin":"대한민국"
    }, {
        "name":"바나나",
        "quantity":40,
        "price":1500,
        "country of origin":"필리핀"
    }, {
        "name":"딸기",
        "quantity":25,
        "price":2000,
        "country of origin":"대한민국"
    }, {
        "name":"포도",
        "quantity":55,
        "price":1800,
        "country of origin":"칠레"
    }, {
        "name":"키위",
        "quantity":100,
        "price":4200,
        "country of origin":"미국"
    }, {
        "name":"수박",
        "quantity":15,
        "price":9800,
        "country of origin":"대한민국"
    }, {
        "name":"감",
        "quantity":250,
        "price":2300,
        "country of origin":"대한민국"

    }],
    "numbers":[50, 20, 123, 12, 33, 46, 70, 21, 56, 560],
    "stringNumbers":["50", "20", "123", "12", "33", "46", "70", "21", "56", "560"]
};

//콜백함수의 인자는 순차적으로 배열의 값이 들어오고 배열의 길이만큼 실행된다.
//filter는 return값이 true인것만 묶은 새로운 배열을 만들어준다
//map은 콜백함수의 리턴값을 새배열로 만들어 리턴한. 각각의 인자값에 추가
//sort는 리턴값이 참이면 첫번쨰 인자가 새로운 배열에 들어가고 거짓이면 두번쨰 인자가 배열에 들어간다.

var fruits = data.fruits;
//1번 0
var dataPrice = fruits.filter(function(fruit){
    return fruit.price >= 4000;
});
console.log(dataPrice);

//2번 0
var priceName = dataPrice.map(function(a){
    return a.name;
})

console.log(priceName);

//3번 0
var priceAlign = fruits.sort(function(a,b){
    return a.price - b.price
});
console.log(priceAlign);

//4번 0
var addUnit = fruits.map(function(unit){
    unit = "name:'"+unit.name+"', quantity:'"+unit.quantity+"개'"+", price:'"+unit.price+"원'";
    return unit;
});
console.log(addUnit);

//5번
// var addProperty = fruits.map(function(add){
//     add = "<tr><td>"+add.name+"</td><td>"+add.quantity+"</td><td>"+add.price+"</td></tr>"
//     return add;
// });

//6번
var addProperty = fruits.map(function(add){
    for(property in add){

        //console.log(add.property.length);
        add = "<tr><td>"+add[property]+"</td></tr>";

    }
    // add = "<tr><td>"+add.name+"</td><td>"+add.quantity+"</td><td>"+add.price+"</td></tr>"
    return add;
});
console.log(addProperty);
function addTable(){
    var str = "<table>";
    str += addProperty.join('');
    str += "</table>"
    return str;
}
//console.log(addTable(addProperty));