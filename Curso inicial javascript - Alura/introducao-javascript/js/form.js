let btn = document.querySelector("#adicionar-paciente");
btn.addEventListener("click", function(event) {
	impedirFuncionamentoDefault(event);

	let formulario = getForm("#form-adiciona");
	let paciente = criaObjetoPaciente(formulario);

	let pacienteValido = validaPaciente(paciente);
	if(!pacienteValido) { return; }

	adicionarPacienteNaTabela(paciente);

	limparFormulario(formulario);
});

function adicionarPacienteNaTabela(paciente) {
	let linha = criaLinha(paciente);
	let tabelaPacientes = getTable("#tabela-pacientes");
	adicionarLinhaNaTabela(tabelaPacientes, linha);
}

function impedirFuncionamentoDefault(event) { event.preventDefault(); }

function getForm(str) { return document.querySelector(str); }

function criaObjetoPaciente(form) {
	let paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaIMC(form.peso.value, form.altura.value).toFixed(2)
	}

	return paciente;
}

function validaPaciente(paciente) {
	let resultado = validaEntradas(paciente);
	let erros = resultado.erros;
	let valido = resultado.valido;

	limparListaErros();
	if(!valido) { exibeMensagensErro(erros); }

	return valido;
}

function limparListaErros() {
	let ul = document.querySelector("#erros");
	ul.innerHTML = "";
	return ul;
}

function validaEntradas(paciente) {
	let erros = [];
	let valido = true;
	let pesoValido = validaPeso(paciente.peso);
	let alturaValida = validaAltura(paciente.altura);
	if(paciente.nome.length == 0) { erros.push("Nome em branco"); valido = false; }
	if(paciente.peso.length == 0) { erros.push("Peso em branco"); valido = false; }
	else if (!pesoValido) { erros.push("Peso inválido"); valido = false; }
	if(paciente.altura.length == 0) { erros.push("Altura em branco"); valido = false; }
	else if (!alturaValida) { erros.push("Altura inválida"); valido = false; }
	if(paciente.gordura.length == 0) { erros.push("Gordura em branco"); valido = false; }

	return {erros: erros, valido: valido};
}

function exibeMensagensErro(erros) {
	let ul = limparListaErros();
	erros.forEach( function(erro) {
		let li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function criaLinha(paciente) {
	let linha = document.createElement("tr");
	linha.classList.add("paciente");

	linha.appendChild(criaTd(paciente.nome, "info-nome"));
	linha.appendChild(criaTd(paciente.peso, "info-peso"));
	linha.appendChild(criaTd(paciente.altura, "info-altura"));
	linha.appendChild(criaTd(paciente.gordura, "info-gordura"));
	linha.appendChild(criaTd(paciente.imc, "info-imc"));
	return linha;
}

function criaTd(dado, classe) {
	let td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function getTable(str) { return document.querySelector(str); }

function adicionarLinhaNaTabela(tabela, linha) { tabela.appendChild(linha); }

function limparFormulario(form) { form.reset(); }