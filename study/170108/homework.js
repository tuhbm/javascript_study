function sum(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function max(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] >= result) result = arr[i];
    }
    return result;
}

function sumIf(arr,target){
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] >= target) result += arr[i];
    }
    return result;
}


function template(target, callback){
    var result='';
    for (var i = 0; i < target.length; i++) {
        result += callback(target[i]);
    }
    return result;
}

function getZeroOrOne(){
    var random = Math.random();
    return random >= 0.5 ? 1 : 0
}
//0 or 1을 반환
function getRandom(num){
    var result = 0;
    // for (var i = 0; i < num-1; i++) {
    //     result += getZeroOrOne();
    // }
    while(--num) result += getZeroOrOne();
    return result;
}

function rangeAge(arr,target){
    var result = target/10;
    //정수를 만들어라
    //4.7 = 4
    if(target > 60) return arr[6];
    return arr[result]
}



//4 번문제
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'grapes', quantity: 10},
    {name: 'strawberries', quantity: 8}
];

function findIndex(arr,callback){
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])) return i;
    }
}

describe('콜백함수를 익히자', function() {
    describe('findIndex', function() {
        it('원하는 데이터의 index를 찾는다', function(){
            expect( findIndex( inventory, function(fruit){return fruit.name === 'bananas';}) ).toBe(1);
            expect( findIndex( inventory, function(fruit){return fruit.name === 'cherries';}) ).toBe(2);
        });
    });
    describe('template', function() {
        it('반복되는 데이터를 마크업으로 변환한다', function() {
            expect( template( inventory, function(fruit){return '<li>'+fruit.name+'<span>수량 : '+fruit.quantity +'</span></li>';}) ).toBe('<li>apples<span>수량 : 2</span></li><li>bananas<span>수량 : 0</span></li><li>cherries<span>수량 : 5</span></li><li>grapes<span>수량 : 10</span></li><li>strawberries<span>수량 : 8</span></li>')
        });
    });
});


function isZero(num){
    return num == 0;
}

function isNum(n){
    return typeof n == 'number';
}
function iterate(){

}
describe('170108 과제', function() {
    it('1. 배열의 숫자를 모두 더하는 sum 함수를 만드시오 - 수호님', function() {
        expect( sum( [1,2,3,4,5,6,7,8,9,10]) ).toBe(55)
        expect( sum( [10,20,77,3,12,8]) ).toBe(130)
    });
    it('2. 배열에서 가장 큰 숫자를 찾는 max 함수를 만드시오 - 수호님', function() {
        expect( max( [1,2,4,10,3,7]) ).toBe(10)
        expect( max( [2,10,-5,19,-4,20,12]) ).toBe(20)
    });
    it('3. 특정 숫자 이상의 숫자만 합산하는 sumif 함수를 만드시오 - 수호님', function() {
        expect( sumIf( [4,5,2,1,5,6,4,7], 6) ).toBe(13)
        expect( sumIf( [3,-4,1,9,10,20], 10) ).toBe(30)
    });
    it('5. isZero 함수를 만드세요 - 욱님', function() {
        expect( isZero(0)).toBe(true)
        expect( isZero(!0)).toBe(false)//!0는 0이외의 수
    });
    it('6. isNum 함수를 만드세요 - 욱님', function() {
        expect( isNum(0)).toBe(true)
        expect( isNum('0')).toBe(false)
    });
    it('7. getRandom함수를 만드세요 - 욱님', function() {
        expect( getRandom(5)).toMatch(/[0-4]/)
    });
    it('8. rangeAge함수를 만드세요 - 욱님', function() {
        expect( rangeAge(['아동', '십대', '이십대', '삼십대', '사십대', '오십대', '육십대이상'], 60)).toBe('육십대이상')
        expect( rangeAge(['아동', '십대', '이십대', '삼십대', '사십대', '오십대', '육십대이상'], 0)).toBe('아동')
    });
});
function iterate(arr,callback){
    var result=0;
    for (var i = 0; i < arr.length; i++) {
        console.log(i);
        console.log(arr[i]);
        result += callback(arr[i])
    }
    return result;
}
describe('iterate(array, callback)', function () {

    var testArray1 = [1,2,3,4,5],
        answer1 = {
            values:[1,2,3,4,5],
            indexs:[0,1,2,3,4],
            array:testArray1
        },
        testArray2 = ["요", "세", "하", "녕", "안"],
        testResult2 = "",
        answer2 = "안녕하세요";

    it('9-1. 배열을 뒤에서 부터 순회하며 값, 인덱스, 해당배열 값들을 받는다', function(){
        iterate(testArray1, function(value, index, array){
            expect(value).toBe(answer1.values[index]);
            expect(index).toBe(answer1.indexs[index]);
            expect(array).toBe(answer1.array);
        });
    });

    // it('9-2. 배열의 값을 뒤에서부터 순회하며 더한다', function(){
    //     iterate(testArray2, function(value){
    //         testResult2 += value;
    //     });
    //     expect(testResult2).toBe(answer2);
    // });

});
