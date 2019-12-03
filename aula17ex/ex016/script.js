window.document.getElementById('btn').addEventListener('click', contar)
function contar() {
    let inicio = Number(window.document.getElementById('in').value)
    let fim = Number(window.document.getElementById('fim').value)
    let step = Number(window.document.getElementById('passo').value)
    let resp = window.document.getElementById('res')
    if (window.document.getElementById('in').value.length == 0 || window.document.getElementById('fim').value.length == 0 || window.document.getElementById('passo').value.length == 0) {
        resp.innerHTML = 'Impossível contar!'
        return
    }

    if (step <= 0) {
        if (step == 0) {
            window.alert('Valor errado para o passo, será setado para 1!')
            window.document.getElementById('passo').value = 1
            step = 1
        } else {
            let auxStep = step*(-1)
            window.alert(`Valor errado para o passo, será setado para ${auxStep}!`)
            window.document.getElementById('passo').value = auxStep
            step = auxStep
        }
    }
    
    resp.innerHTML = 'Contando: '
    if (fim > inicio) {
        for (let contador = inicio; contador <= fim; contador+=step) {
            resp.innerHTML += `${contador} 👉 `
            //recebe aqui um emoticon
        }
    } else {
        for (let contador = inicio; contador >= fim; contador-=step) {
            resp.innerHTML += `${contador} 👉 `
            //recebe aqui um emoticon
        }
    }
    //recebe o emoticon final
    resp.innerHTML += '🏁'
}