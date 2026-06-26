const apartamento = [] 
const formAp = document.querySelector('#form-lote')
const divResult = document.querySelector('#resultado-lote')

formAp.addEventListener('submit', (evt) =>{ 
    evt.preventDefault()

    const dadosForm = new FormData(formAp)

    const ap = {
        largura: dadosForm.get('largura'),
        comprimento: dadosForm.get('comprimento')
    }
    addAp(ap)

    formAp.reset()
    
})

const addAp = (objAp) => {
        apartamento.push(objAp)
        listaApartamento()
    }

const listaApartamento = () => {
    divResult.innerHTML = ''
    apartamento.forEach((elem, i) => {
    divResult.innerHTML += `<div-class = 'apNovo'> Apartamento ${i + 1} <br> Largura do lote: ${elem.largura} <br> Comprimento do lote: ${elem.comprimento}`
})
}


