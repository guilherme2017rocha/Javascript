let filtro = document.querySelector("#filtro");

filtro.addEventListener("input", function() {
	let pacientes = document.querySelectorAll(".paciente");

	pacientes.forEach(function(paciente) {
		let nomeTd = paciente.querySelector(".info-nome");
		let nome = nomeTd.textContent;
		let nomeBuscado = new RegExp(filtro.value, "i");
		if(!nomeBuscado.test(nome)) {
			paciente.classList.add("escondido");
		} else {
			paciente.classList.remove("escondido");
		}
	});

});