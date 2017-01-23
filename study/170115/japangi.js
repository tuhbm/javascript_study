//자판기 기능
//1.상태와 동작
//전원
//음료수의 수량
//음료수의 가격
//돈
//거스름돈

//2.동작
//전원을 켜고 끈다
//돈을 넣는다
//음료수 버튼을 누른다
//거스름돈 반환버튼을 누른다

var japangi1 ={
    power:false,
    moneyBox:0,
    menu:[{
        name:'콜라',
        price:500,
        amount:20
    },{
        name:'사이다',
        price:600,
        amount:10
    },{
        name:'환타',
        price:700,
        amount:15
    }]
};

var japangiAction ={
    getDrink : function(money,drinkName){
        if(!this.power) throw new Error('전원이 꺼져있습니다.');
        if(!money) throw new Error('돈을 넣어주세요.');
        if(!drinkName) throw new Error('음료를 선택해주세요.')

        for (var i = 0; i < this.menu.length; i++) {
            var drink = this.menu[i];
            if(drink.name === drinkName) return drink;
        }
    },
    pushPowerOn: function() {
        this.power = true;
    },
    pushPowerOff : function(){
        this.power = false;
    }

}


//japangiAction.getDrink(japangi1)


