function is_name_valid(name){
    var regex = new RegExp("^[A-Z]{3,}$");
    if (regex.test(name)) {
        return true;
    } else {
        return false;
    }
}

function is_age_valid(age){
    var regex = new RegExp("^[0-9]{2}$");
    if (regex.test(age)) {
        return true;
    } else {
        return false;
    }
}

function is_username_valid(username){
    var regex = new RegExp("^[a-z]{4}_+[0-9]{3}$");
    if (regex.test(username)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_name_valid('dani'));
console.log(is_age_valid(23));
console.log(is_username_valid("dani_123"))