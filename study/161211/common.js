
/*
자판기를 만들어라!
700원 이상이면 콜라가 나오고 700원 미만이면 사이다가 나온다.
돈을 안넣으면 아무것도 안나온다(암시적으로 undefined가 나온다)
*/
//내가한것
function japangi(money){
	if(money >= 700){
		return '콜라';
	}else if(money){
		return '사이다';
	}
}
//공식풀이
function a(money){
    if(!money || typeof money !== 'number') throw new Error('돈을 넣어주세요'); //throw new Error 에러값을 발생시켜주는것
    if(money >= 700) return '콜라';
    if(money < 700) return '사이다';
}


//숫자를 넣으면 그 숫자의 제곱을 반환하는 함수를 만들어라
function japangi2(num){
	return num*num;
}

//숫자를 넣으면 자리수(?) 구분해주는 함수를 만들어라
//숫자를 넣었을때 숫자가 한자리 숫자이면 1이, 두자리 숫자면 11이, 세자리 숫자면 111이 나오는 함수를 만들어라.
//그이상일경우는 '너무 큽니다'를 나오게해주세요
//내가한것
function japangi3(num){
	if(num <= 9){
		return 1;
	}else if(num <=99){
		return 11;
	}else if(num <=999){
		return 111;
	}else if(num > 999){
		return '너무 큽니다';
	}
}
//공시굴이
function c(number){
    if(number < 10) return 1;
    if(number < 100) return 11;
    if(number < 1000) return 111;
    return '너무크다';
}

//24시간 표기법으로 시간을 입력받아 오전/오후/저녁/그후를 출력하세요.
//24시간 표기법으로 시간을 입력받아 (0~11: 오전) (12~17:오후) (18~20:저녁) (그이후:늦었어요^^) 를 출력하시면 됩니다^^
//내가
function japangi4(time){
	if(time <= 11) return "오전";
	else if(time <= 17) return "오후";
	else if(time <= 20)return "저녁";
	else return "늦었어요^^";
}
//공식
function d(time){
    if(0 <= time && time < 12) return '오전';
    if(12 <= time && time < 18) return '오후';
    if(18 <= time && time < 21) return '저녁';
    return '늦었어요^^';
}





function sum(a,b,c){
    return a+b+c;
}
sum(1,10,5);

function greeting(name){
    return '어서오세요 ' + name + '님 반갑습니다';
}
//ES6 문법  ` = 백틱
function greeting2(name){
    return `어서오세요 ${name}님 반갑습니다`;
}

var suho = {
    age : 32,
    height : 182,
    energy :10,
    run : function(){
        this.energy = this.energy -1;
        return '달려';
    }
}