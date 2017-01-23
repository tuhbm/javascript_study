//max,min,sum 개선

//함수 선언시 암묵적으로 arguments 와 this가 존재
//arguments 객체
//언제나 어떤게 들어왔는지 확인가능
//배열인지 검사를 해서 아닐시 유사배열형태로 만든다.
//유사배열은 키가 숫자(키값이 자동으로 변환)
//arguments 는 매개변수를 지정을 안해도 암묵적으로 존재하기때문에 인식가능

//arguments -> 매개변수가 아니다.
function max(){
    var arr = typeof arguments[0] === 'number' ? arguments : arguments[0];
    var maxNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(maxNum < arr[i]) maxNum = arr[i];
    }
    return maxNum;

}

function min(){
    var arr = typeof arguments[0] ==='number' ? arguments : arguments[0];
    var minNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(minNum > arr[i]) minNum = arr[i];
    }
    return minNum;
}

function sum(){
    var arr = typeof arguments[0] ==='number' ? arguments : arguments[0];
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

min([1,24,21,5,21,56,32,6,36]);
min(1,24,21,5,21,56,32,6,36);
max([1,24,21,5,21,56,32,6,36]);
max(1,24,21,5,21,56,32,6,36);
sum([1,24,21,5,21,56,32,6,36]);
sum(1,24,21,5,21,56,32,6,36);
