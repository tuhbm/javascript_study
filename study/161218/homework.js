//1번문제 input.func(); 객체함수를 3번실행할때마다 에러구문을 출력하세요.
//설명 : 예를 들어 6번을 실행한다고 하면 3번째와 6번째 실행시 에러구문을 출력하시면 됩니다.

var a = 0;
function error(){
    a++;
    if(a%3==0){
        throw new Error('에러입니다')
    }
}

//정답


//2번문제 입력된 값의 타입을 알려주는 함수를 만드시오
//설명:a(5) === '입력된 값은  number 입니다.',a('dddd') === '입력된 값은 string 입니다.', a() === '알수없는 값입니다'
function type(a){
    if(typeof a == 'undefined' || typeof a == ''){
        return '알수 없는 값입니다'
    }
    return '입력된 값은 '+typeof a+' 입니다';
}

//정답
//typeof 는 연산자이다!! 괄호 필요없음 , 괄호는 우선순위
function a(v){
    var type = typeof v;

    if(type ==='undefined') return '알 수 없는 값 입니다';

    return '입력된 값은' + type + '입니다';
}


//3번문제 2개의 숫자를 입력 받아 더 큰 숫자를 반환하는 max함수를 만드시오
//설명 : max(1, 5) === 5, max(100, 20) === 100, max(30, 30) === 30
function max(a,b){
    if(a > b){
        return a;
    }
    return b;
}

//정답
//삼항 연산자가 더 간단하게 사용가능하다.
function maxFinal(a,b) {
    // if(a > b) return a;
    // return b;
    // return 조건 ? 값1 : 값2
    return a > b ? a : b;//삼항 연산자 괄호 필요없음
}



//4번문제 4개의 숫자를 입력 받아 가장 작은 숫자를 반환하는 min함수를 만드시오.
//설명 : min(1, 5, 12, 10) === 1, min(100, 20, 15, 40) === 15, min(30, 25, 25, 50) === 25
function min(a,b,c,d){
    if(a > b && a > c && a > d) return a;
    if(b > a && b > c && b > d) return b;
    if(c > a && c > b && c > d) return c;
    return d;
}

//정답
//값과 식과 문에대해서 자세히 알아볼것
//값은 식에 의해 바뀐다. 식은 조건에 의해서 바뀐다(if문에 의해서 바뀌는게 아니다.)
//왼쪽에서 오른쪽으로 읽어가면서 기억을 하고 비교해서 넘어가고 이런식으로 진행한다.
function minFinal(a,b,c,d){
    var temp = a;
    if(temp > b) temp = b;
    if(temp > c) temp = c;
    if(temp > d) temp = d;

    return temp;
}

// var Math = {
//     max : max,
//     min : min
// };

//자바스크립트에는 기본 Math라는 객체가 존재함.
//기존 구성되어있는것 이있는 것을 표준 라이브러리라고 지칭한다.
//ex:) Date , Math
//window.Date , window.max , window.min ,  window.document
//이미 가지고 있는 부분을 가져다 쓰는것이 가장 좋은코드



//5번문제 2개의 문자를 입력 받아 동일한지 확인하는 exact 함수를 만드시오.
//설명 : exact('안녕', '안녕') === true, exact('안녕', '메롱') === false
function exact(a,b){
    if(a === b) return true;
    return false;
}

//정답
//
function exactFinal(a,b){
    return a === b ;
}

//6번문제 숫자를 하나 입력 받아 그 숫자의 절대값을 반환하는 abs 함수를 만드시오.
//설명 : abs(-400) === 400, abs(200) === 200
function abs(a){
    if(a<0) return a*-1;
    if(a = 0) return a;
    return a;
}
// 미완료

//정답
//절대값음 * -1을 해주면된다
function absFinsh(n) {
    return n < 0 ? n * -1 : n;
}

//7번문제 반지름을 입력받아 원의 넓이를 반환하는 circle 함수를 만드시오.
//설명 : circle(5) === 78.5, circle(70) === 15386
function circle(a){
    return a*a*3.14;
}

//정답
// 반지름*반지름3.14
function circleFinal(r){
    return r*r*3.14;
}

//8번문제 2개의 숫자중에 더 큰 숫자를 반지름으로 하여 원의 넓이를 구하시오.
//설명 :  circle( ? ) === ?
circle(max(a,b));

//정답
// 2개의 숫자중에 더큰 숫자 -> 반지름 넓이(위에서 만든걸 활용해라!!
//함수를 만드는 이유는 재사용을 위해서 만든다.
//단일책임의 원칙
//코드를 잘짜는것은 좋은코드를 알아야한다
//좋은코드(SOLID)원칙
circleFinal(max(a,b));


//9번문제 html 엘리먼트 이름과 텍스트를 문자열로 입력받아, 이를 조합하여 반환하는 createElement
//설명 : createElement('div', '안녕하세요') === '<div>안녕하세요</div>', createElement('p', '반갑습니다') === '<p>반갑습니다</p>', createElement('h1') === '<h1></h1>'
function createElement(a,b){
    if(a == undefined || b == undefined) return '<'+a+'></'+a+'>';
    return '<'+a+'>'+b+'</'+a+'>';
}

//정답
//
function createElementFinal(tag, text){
    return '<'+ tag +'>'+ (text || '') +'</'+ tag +'>'
}


//10번문제 9번의 createElement함수를 응용하여 다음의 조건을 만족하시오9번의 createElement함수를 응용하여 다음의 조건을 만족하시오
//설명
createElementFinal('div',createElementFinal('p', '반갑습니다'));

//정답
// 값이 함수가 될수있다.
// DOM을 만들때 함수의 인자값을 받아서 만든다.

//11번문제 makeURL함수를 만드시오makeURL함수를 만드시오
//설명 : makeURL('naver.com') === 'http://www.naver.com'
function makeURL(a){
    return 'http://www.'+a;
}

//정답
function makeURUFinal(url){
    return 'http:www.'+ url;
}

//12번문제 seeThat 함수를 만드시오.(욱님)
//설명 : seeThat('어떤문자') === '어떤문자'
function seeThat(a){
    return a;
}

//13번문제 confuse 함수를 만드시오 문자가 아닐시에 에러를 반환해주세요.(욱님)
function confuse(a){
    if(typeof(a) == 'string') return a;
    throw new Error('문자를 입력해주세요');
}

//14번문제 고객이 아무거나 집어넣어도 mission completed + 외쳐 사랑합니다 고객님 함수를 만드시오.(욱님)
function tell(a){
    return 'misiion completed + 외쳐 사랑합니다 고객님'
}

//15번문제 3개의 숫자를 입력 받아 내림차순으로 정렬이 된 문자열을 반환하는 descend함수를 만드시오.(정현님)
function descend(a,b,c){
    
}
//16번문제 3개의 인자를 입력받아 사칙연산을 계산하는 컴퓨터 함수를 만드시오.(욱님)
function computer(a,b,c){
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    return acb
}





