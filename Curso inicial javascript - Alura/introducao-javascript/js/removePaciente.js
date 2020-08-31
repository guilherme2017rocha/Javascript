let tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function(event) {
	let td = event.target;
	let tr = td.parentNode;
	tr.classList.add("fadeOut");
	setTimeout(function() { tr.remove(); }, 500);
});