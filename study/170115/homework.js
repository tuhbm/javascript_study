function max(arr){
    var length = arguments.length;
    var result = 0;
    if(length != 1){
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i] >= result) result = arguments[i];
        }
    }else{
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] >= result) result = arr[i];
        }
    }
    return result;
}
function min(arr){
    var length = arguments.length;
    var result;
    if(length != 1){
        result = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i] <= result) result = arguments[i];
        }
    }else{
        result = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] <= result) result = arr[i];
        }
    }
    return result;
}
function sum(arr,target){
    var length = arguments.length;
    var result = 0;
    if(length != 1){
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
    }else{
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
    }
    return result;
}
describe('170115 과제', function() {
    it('1. max, min, sum 개선(여러개 인자와 배열 모두 대응 가능하도록) - 수호님', function() {
        expect( max(1,5,6,3,2,10,4) ).toBe(10)
        expect( max([4,6,3,2,7,11,1]) ).toBe(11)
        expect( min(1,5,6,3,2,10,4) ).toBe(1)
        expect( min([4,6,3,2,7,11,1]) ).toBe(1)
        expect( sum( [1,2,3,4,5,6,7,8,9,10]) ).toBe(55)
        expect( sum( [10,20,77,3,12,8]) ).toBe(130)
    });
});

var state = {
    power: 'off',
    money: 0,
    menu :[{
        name :'콜라',
        price:500,
        amount:20

    },{
        name :'사이다',
        price:500,
        amount:20

    },{
        name :'환타',
        price:500,
        amount:20

    }],
    changeM:0
}

function vendingM(){

}