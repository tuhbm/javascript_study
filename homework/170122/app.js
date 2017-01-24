//max, min, sum 개선
function max() {
    var arr = typeof arguments[0] === 'number' ? arguments : arguments[0];
    var maxNum = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if(maxNum > arr[i]) maxNum = arr[i];
    }
    return maxNum;
}
