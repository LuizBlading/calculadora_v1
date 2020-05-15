function soma() {

    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
    var soma = parseInt(num1) + parseInt(num2);

    console.log(soma);
    document.querySelector('#resultado').value = soma;
}

function subtracao(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;

    var sub = parseInt(num1) - parseInt(num2);

    console.log(sub);
    document.querySelector('#resultado').value = sub;
}

function multiplicacao(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;

    var multi = parseInt(num1) * parseInt(num2);

    console.log(multi);
    document.querySelector('#resultado').value = multi;
}

function divisao(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;

    var divi = parseFloat(num1) / parseFloat(num2);

    console.log(divi);
    document.querySelector('#resultado').value = divi;
}

