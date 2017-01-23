//XMLHttpRequest객체를 사용하여 통신

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr);
    }

}

xhr.open('get','./data.json',true);
xhr.send();
