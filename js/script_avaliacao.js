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
    divResult.innerHTML += `<div-class = 'apNovo'> Lote ${i + 1} <br> Descrição: Quadra ${elem.quadra} - Lote ${elem.lote} <br> Largura do lote: ${elem.largura} <br> Comprimento do lote: ${elem.comprimento} <br> ${calculoArea(elem)} <br> ${calculoLote(elem)} <br> taxa do lote: ${taxalote(elem)}` // colocar to fixed para deixar legível em forma de moeda no calculolote
})
}
let  aream2 = ''

const calculoArea = (objAp) =>{
    aream2 = `${parseFloat(objAp.largura) * (objAp.comprimento)}`
    return aream2

}
let valorLote = ''
let valorFixo = 550

const calculoLote = (calculoArea) =>{
    valorLote = `${parseFloat(aream2) * (valorFixo)}` 
    return valorLote
} 
let taxa = ''
const taxalote = (calculoLote) => {
    if ((valorLote) < 20000){
    taxa = `Isento de taxa`
    } else
    taxa = `tudo companheiro`

    return taxa
}