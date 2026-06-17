

function sortear() {
    let numeroAleatorio = (Math.random() * 2 + 7).toFixed(1)
    return numeroAleatorio
}

let listaCavalos = []


function largada() {

    let qtdCavalos = Number(meu_select.value)

    let qtdVoltas = Number(input_voltas.value)

    let mensagem = ''

    for (let c = 0; c < qtdCavalos; c++) {

        let nomeCavalo = prompt(`Digite o nome do ${c + 1}º cavalo:`)

        listaCavalos.push({ nome: nomeCavalo, tempo: 0, tempoTotal: 0 })
    }

    for (let v = 0; v < qtdVoltas; v++) {

        mensagem += `Volta ${v + 1}<br><br>`;


        for (let c = 0; c < listaCavalos.length; c++) {

            let cavaloAtual = listaCavalos[c]

            cavaloAtual.tempo = sortear()
            cavaloAtual.tempoTotal += Number(cavaloAtual.tempo)

            mensagem +=
                `
                 Cavalo: ${cavaloAtual.nome} 
                 – Tempo: ${cavaloAtual.tempo} 
                 – Tempo total: ${cavaloAtual.tempoTotal.toFixed(1)}<br><br> `
        }

    }

    div_mensagem.innerHTML = mensagem
    podio()
    listaCavalos = []
}

function podio() {

    listaCavalos.sort((a, b) => a.tempoTotal - b.tempoTotal)
    let mensagemPodio = ''

    for (let p = 0; p < listaCavalos.length; p++) {

        if (p == 3) {
            break
        }

        mensagemPodio +=
            `${p + 1}º lugar com o tempo de ${listaCavalos[p].tempoTotal.toFixed(1)}: 
         Cavalo: ${listaCavalos[p].nome}<br><br>`
    }

    return div_podio.innerHTML = mensagemPodio
}
