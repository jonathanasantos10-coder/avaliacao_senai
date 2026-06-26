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
    divResult.innerHTML += `<div-class = 'apNovo'> Lote ${i + 1} <br> Descrição: Quadra ${elem.quadra} - Lote ${elem.lote} <br> Largura do lote: ${elem.largura} <br> Comprimento do lote: ${elem.comprimento} <br> Área do Apartamento em M²: ${parseFloat(calculoArea(elem)).toFixed(2)} <br> Valor do lote em R$: ${parseFloat(calculoLote(elem)).toFixed(2).replace('.',',')} <br> Valor da taxa do lote: ${taxalote(elem)} <br> <br>` 
})
}
let  aream2 = ''

const calculoArea = (objAp) =>{
    aream2 = `${(objAp.largura) * (objAp.comprimento)}`
    return aream2

}
let valorLote = ''
let valorFixo = 550

const calculoLote = (calculoArea) =>{
    valorLote = `${(aream2) * (valorFixo)}` 
    return valorLote
} 
let taxa = ''
const taxalote = (calculoLote) => {
    if ((valorLote) < 20000){
    taxa = `Isento de taxa pois o valor do seu lote é menor que 20 Mil reais.`
    }else if ((valorLote) >20000 <100000){
    taxa = `${parseFloat(valorLote * 0.05).toFixed(2).replace('.',',')}`
    }else if((valorLote) >100000 < 500000){
    taxa = `${parseFloat(valorLote * 0.10).toFixed(2).replace('.',',')}`
    }else if((valorLote) >500000 <1000000){
    taxa = `${parseFloat(valorLote * 0.15).toFixed(2).replace('.',',')}`
    }else 
    taxa = `${parseFloat(valorLote * 0.20).toFixed(2).replace('.',',')}`
    return taxa
}
