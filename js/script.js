function insert(num) {
    // Pega o valor do botão clicado e insere na caixa de texto
    // pega o valor vazio do textview e soma com o valor da var num, 
    // que esta passada como argumento no botão html
    document.form.textview.value = document.form.textview.value + num
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    // Limpa a caixa de texto
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    // faz apagar o oque foi escrito
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
