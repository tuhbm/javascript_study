//함수는 값을 받아서 값을 리턴;
//값은 숫자, 문자, 불린 , 함수, 객체 ,배열 ,ture , false, undefind, null, NaN

function disPlayName(person){
    return person.name;
}
//객체를 생성하는 방식은 여러가지
//{}방식은 객체 리터럴 방식
// key : value (키 : 값)
var person = {
    name : 'taekyun',
    age : 29,
    run : function(){
        return '달린다';
    }
};
// .앞에는 객체
function b(callback) {
    callback();
}

function $(){
    return {
        ready: function( callback ){
            //돔이 준비되면 이라는 로직
            callback();
        },
        on : function (eventName , callback){
            //이벤트가 일어났을 때
            callback();
        }
    }
}
//함수가 값으로 사용될때는 익명함수를 사용한다

$(document).ready(function(){

});


//반복문
//삼항연산자는 식
//if는 문
//식은 조건에 할당될 수 있다.
//식 안에는 값이 존재
//문은 변수에 할당될 수 없다.
//조건은 식

//while 문
function loop( length, callback ){
    var i = 0;
    while( i < length) {
        //실행
        //console.log('[i] :' + i);
        callback(i);
        i += 1;//i = i + 1;  //i++;

    }
    //반복 종료
    console.log('종료');
}
function loop( length, callback ){
    while(length--) {
        callback(length);
    }
    //반복 종료
    console.log('종료');
}
loop(10,function(index){
   console.log('하하하' + index);
});

//for 문
function loop2(){
    // for(초기화;조건식;끝나고 실행){}
    // var i = 0;
    // for(;i < length;){
    //     callback(i);
    //     i ++;
    // }


//초기화,조건식,포문결과 에 함수가 들어갈수도 있다. 값만 배출하면된다.
    for(var i = 0;i < length;i++){
        callback(i);
    }
    console.log('종료');
}





//배열
// function displayHeight(arr) {
//     var i = 0;
//     while(i < arr.length){
//         console.log('키는 : '+ arr[i] + 'cm 입니다');
//         i++;
//     }
//     conosole.log('종료');
// }
function displayHeight(arr) {
    for(var i = 0;i < arr.length;i++){
        console.log('키는 : '+ arr[i] + 'cm 입니다');
    }
    conosole.log('종료');
}
var heightList = [153, 171, 174, 178, 162, 158];
displayHeight(heightList);




function min(arr){
    var temp = arr[0];
    for(var i = 0;i<arr.length;i++){
        if( temp > arr[i] ) temp = arr[i];
    }
    return temp;
}
min([123,456,2321,1421421,5415,415,23432,5215234,243132]);
//max 개선
//creatElement함수 개선해볼것

function countif1(arr){
    for(var i =0 ; i < arr.length;i++){
        var male = arr.gender.text('남').length;
        var female = arr.gender.text('여').length;
        function num(gender){
            return gender;
        }
    }
        if(arr.gender = '남') return num
        if(arr.gender = '여') return
    }
}
var arr = {지정한부분들어가는곳)
//

function countif(arr, target){
    var result = 0;
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] === target){
            result +=1;
        }
    }
    return result;

}

function countif(arr, target){
    var result = 0;
    var i = arr.length;

    while(i--){
        if(arr[i] === target){
            result +=1;
        }
    }

    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] === target){
            result +=1;
        }
    }
    return result;
}
var arr = ['남','여','남','여','남','남','여','남','남','여','남','여','여','여','여','여'];
console.log('남자 수는'countif(arr,'남'));
console.log('여자 수는'countif(arr,'여'));











