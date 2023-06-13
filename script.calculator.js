let result = document.querySelector('input#resultado')

document.onkeydown = teclado
function teclado (k) {
	if (k.keyCode == 96) {
		result.value += '0'
	} else if (k.keyCode == 97) {
		result.value += '1'
	} else if (k.keyCode == 98) {
		result.value += '2'
	} else if (k.keyCode == 99) {
		result.value += '3'
	} else if (k.keyCode == 100) {
		result.value += '4'
	} else if (k.keyCode == 101) {
		result.value += '5'
	} else if (k.keyCode == 102) {
		result.value += '6'
	} else if (k.keyCode == 103) {
		result.value += '7'
	} else if (k.keyCode == 104) {
		result.value += '8'
	} else if (k.keyCode == 105) {
		result.value += '9'
	} else if (k.keyCode == 106) {
		result.value += '*'
	} else if (k.keyCode == 107) {
		result.value += '+'
	} else if (k.keyCode == 109) {
		result.value += '-'
	}else if (k.keyCode == 110) {
		result.value += '.'
	}else if (k.keyCode == 111) {
		result.value += '/'
	}else if (k.keyCode == 8) {
		back()
	}else if (k.keyCode == 27) {
		clean()
	}else if (k.keyCode == 13) {
		calcular()
	}
}

function clean() {
	result.value = '0'
}
function back() {
	/* Foi criada outra variavel para pegar todos os caracteres escritos e usado o .substring(0, let.length -1) para diminuir 1 caractere por vez. */
	if (result.value == "" || result.value == '0') {
		result.value = '0'
	} else {
		let resultado = document.getElementById('resultado').value
	result.value = resultado.substring(0, resultado.length -1)
	}
}
function insert(num) {
	if (result.value == '0' || result.value == "") {
		result.value = num
	} else if (result.value == '0' && result.value.slice(-1) == '.') {
		result.value += `0,`
	} else {
		result.value += num
	}
}
function calcular() {
	let resultado = document.getElementById('resultado').value
	if(resultado) {
		document.getElementById('resultado').value = eval(resultado)
		/* Aqui foi usado a função EVAL para fazer o calculo automatico das operação. */
	}
}

