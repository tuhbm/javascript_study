function min(a,b,c,d){
    var m = a;
    if(m > b) m = b;
    if(m > c) m = c;
    if(m > d) m = d;
    return m;
}

function max(arr){
    var result = arr[0];
    for(var i = 0; i < arr.length; i++){
        return arr[i] > arr[i+1] ? arr[i] : arr[i+1]
    }
    return result;
}
describe('오늘날짜', function (){
   it('가장 작은수를 반환한다',function(){
       expect(min(1,5,3,19)).toBe(1);

   })
    it('가장 작은수를 반환한다',function(){
        expect(max(1,5,3,19)).toBe(19);

    })
});