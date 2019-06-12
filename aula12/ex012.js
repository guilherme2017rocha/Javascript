var data = new Date()
var hora = data.getHours()
var seg = data.getSeconds()
var dia = data.getDay()
var dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta']
console.log(dias[dia])
if (hora < 12) {
    console.log('Bom dia!')
} else if(hora < 18) {
    console.log('Boa tarde!')
} else if (hora < 24 || hora == 0)
    console.log('Boa noite')
