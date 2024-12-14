let number1 =0;
let number2 =0;
document.getElementById("myAdd").onclick = function(){
    number1 = document.getElementById("myNum1").value;
    number2 = document.getElementById("myNum2").value;
    results = parseInt(number1)+parseInt(number2)
    document.getElementById("myH2").textContent = `Results = ${results}`
    console.log(results);
}

document.getElementById("mySub").onclick = function(){
    number1 = document.getElementById("myNum1").value;
    number2 = document.getElementById("myNum2").value;
    results = parseInt(number1)-parseInt(number2)
    document.getElementById("myH2").textContent = `Results = ${results}`
    console.log(results);
}

document.getElementById("myMul").onclick = function(){
    number1 = document.getElementById("myNum1").value;
    number2 = document.getElementById("myNum2").value;
    results = parseInt(number1)*parseInt(number2)
    document.getElementById("myH2").textContent = `Results = ${results}`
    console.log(results);
}

document.getElementById("myDiv").onclick = function(){
    number1 = document.getElementById("myNum1").value;
    number2 = document.getElementById("myNum2").value;
    results = parseInt(number1)/parseInt(number2)
    document.getElementById("myH2").textContent = `Results = ${results}`
    console.log(results);
}