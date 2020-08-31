let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


let pacientes = selecionaPacientes();

for(let i = 0; i < pacientes.length; i++) {
	let paciente = pacientes[i];

	let peso = retornaPesoDoPaciente(paciente);
	let altura = retornaAlturaDoPaciente(paciente);

	let pesoValido = validaPeso(peso);
	let alturaValida = validaAltura(altura);

	if (!pesoValido) {
		paciente.querySelector(".info-peso").textContent = "Peso inválido";
	}

	if (!alturaValida) {
		paciente.querySelector(".info-altura").textContent = "Altura inválida";
	}

	if (pesoValido && alturaValida) {
		let imc = calculaIMC(peso, altura);
		paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	} else {
		paciente.querySelector(".info-imc").textContent = "Peso e/ou altura inválidos.";
		paciente.classList.add("pacienteInvalido");
	}
}

function calculaIMC(peso, altura) {
	return peso / (altura*altura);
}

function selecionaPacientes() {
	return document.querySelectorAll(".paciente");
}

function retornaPesoDoPaciente(paciente) {
	return paciente.querySelector(".info-peso").textContent;
}

function retornaAlturaDoPaciente(paciente) {
	return paciente.querySelector(".info-altura").textContent;
}

function validaPeso(peso) {
	if (peso > 0 && peso <= 500) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura > 0 && altura < 3.00) {
		return true;
	} else {
		return false;
	}
}