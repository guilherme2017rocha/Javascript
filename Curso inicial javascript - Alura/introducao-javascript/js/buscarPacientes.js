let btnBuscarPacientes = document.querySelector("#buscarPacientes");

btnBuscarPacientes.addEventListener("click", function() {
	console.log("Buscando pacientes...");
	let metodoRequest = "GET";
	let enderecoRquest = "https://api-pacientes.herokuapp.com/pacientes";
	//let enderecoRquest = document.querySelector("#buscadorDePacientes").textContent;
	let xhr = new XMLHttpRequest();
	xhr.open(metodoRequest, enderecoRquest);
	
	xhr.addEventListener("load", function() {

		//Conceite de ajax isso aqui, fazer algo de modo assíncrono no js; aqui é feita uma 
		//requisição assíncrona!
		//Enquanto esse código roda, todo o resto continua rodando e funcionando

		let statusOk = 200;

		if(xhr.status == statusOk) {
			document.querySelector("#erroBuscaPacientes").classList.add("escondido");
			let resposta = xhr.responseText;
			let pacientes = JSON.parse(resposta);
			pacientes.forEach( function(paciente) {
				adicionarPacienteNaTabela(paciente);
			});
		} else {
			console.log(xhr.status);
			document.querySelector("#erroBuscaPacientes").classList.remove("escondido");
		}

	});

	xhr.send();


});