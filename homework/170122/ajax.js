var $ = {
  ajax: ajax
};

function ajax(url, callback){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
        }
    };

    xhr.open('get', url, true);
    xhr.send();
}

$.ajax('../../../../data.json', function(response){
    document.write(response);
});