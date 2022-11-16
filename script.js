function additionBy(){
    let x = parseInt(document.getElementById("firstnumber").value);
    let y = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML = x + y;
}

function substractBy(){
    let x = parseInt(document.getElementById("firstnumber").value);
    let y = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML = x - y;
}

function multiplyBy(){
    let x = parseInt(document.getElementById("firstnumber").value);
    let y = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML = x * y;
}

function divideBy(){
    let x = parseFloat(document.getElementById("firstnumber").value);
    let y = parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML = x / y;
}