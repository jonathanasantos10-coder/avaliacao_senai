const apartamento = [] 
const formAp = document.querySelector('#form-lote')
const divResult = document.querySelector('#resultado-lote')
const largura = document.querySelector('#largura')
const comprimento = document.querySelector('#comprimento')


formAp.addEventListener('submit', (evt) =>{ 
    evt.preventDefault()
    const dadosForm = new FormData(formAp)
  
    const ap = {
        quadra: dadosForm.get('quadra'),
        lote: dadosForm.get('lote'),
        largura: dadosForm.get('largura'),
        comprimento: dadosForm.get('comprimento'),
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
    divResult.innerHTML += `<div-class = 'apNovo'> Lote ${i + 1} <br> Descrição: Quadra ${elem.quadra} - Lote ${elem.lote} <br> Largura do lote: ${elem.largura} <br> Comprimento do lote: ${elem.comprimento} <br> ${calculoArea(elem)}`
})
}
let  aream2 = ''
const calculoArea = (objAp) =>{
    aream2 = `Área m² do AP: ${parseFloat(objAp.largura) * (objAp.comprimento)}`
    return aream2
}
