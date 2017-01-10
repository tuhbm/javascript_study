function sum(arr){
    var result = 0;
    for(var i = 0;i < arr.length; i++){
        result += arr[i];
    }
    return result;
}


function max(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] > arr[i+1] ? result == arr[i] : result == arr[i+1];
        console.log(result);
    }
    return result;
}



//4 번문제
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'grapes', quantity: 10},
    {name: 'strawberries', quantity: 8}
];

describe('콜백함수를 익히자', function() {
    describe('findIndex', function() {
        it('원하는 데이터의 index를 찾는다', function(){
            expect(
                findIndex(inventory, function(fruit) {
                    return fruit.name === 'bananas';
                })
            ).toBe(1);
            expect(
                findIndex(inventory, function(fruit) {
                    return fruit.name === 'cherries';
                })
            ).toBe(2);
        });
    });

    describe('template', function() {
        it('반복되는 데이터를 마크업으로 변환한다', function() {
            expect(
                template(inventory, function(fruit) {
                    return '<li>'+fruit.name+'<span>수량 : '+fruit.quantity +'</span></li>';
                })
            ).toBe('<li>apples<span>수량 : 2</span></li><li>bananas<span>수량 : 0</span></li><li>cherries<span>수량 : 5</span></li><li>grapes<span>수량 : 10</span></li><li>strawberries<span>수량 : 8</span></li>')
        });
    });
});




describe('170108 과제', function() {
    it('배열의 숫자를 모두 더하는 sum 함수를 만드시오 - 수호님', function() {
        expect( sum([1,2,3,4,5,6,7,8,9,10]) ).toBe(55)
        expect( sum([10,20,77,3,12,8]) ).toBe(130)
    });
    it('배열에서 가장 큰 숫자를 찾는 max 함수를 만드시오 - 수호님', function() {
        expect( max([1,2,4,10,3,7]) ).toBe(10)
        expect( max([2,10,-5,19,-4,20,12]) ).toBe(20)
    });
    it('특정 숫자 이상의 숫자만 합산하는 sumif 함수를 만드시오 - 수호님', function() {
        expect( sumIf([4,5,2,1,5,6,4,7], 6) ).toBe(13)
        expect( sumIf([3,-4,1,9,10,20], 10) ).toBe(30)
    });
    it('isZero 함수를 만드세요 - 욱님', function() {
        expect( isZero(0).toBe(true) )
        expect( isZero(!0).toBe(false) ) //!0는 0이외의 수
    });
    it('isNum 함수를 만드세요 - 욱님', function() {
        expect( isNum(0).toBe(true) )
        expect( isNum('0').toBe(false) )
    });
});