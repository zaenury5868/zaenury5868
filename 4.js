function sortNumber(number){
    var value = number.replace(/[^0-9]/g, '');
    var list = []
    for (var i = 0; i < value.length; i++) {
        list.push(value.charAt(i))
    }
    list.sort()
    if (!value){
        console.log("No number found in parameter!");
    }
    else{
        console.log(list.join(""));
    }
}

console.log(sortNumber("a2s3u123"))