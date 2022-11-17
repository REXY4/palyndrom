//in data palyndrom; 
function palyndrom(value){
    const splitValue = String(value).split("");
    let array = [];
    for(var i = splitValue.length - 1; i >= 0; i--) {
        array.push(splitValue[i])
    }
    return String(value) === array.join("")
}


console.log(palyndrom("satas"))