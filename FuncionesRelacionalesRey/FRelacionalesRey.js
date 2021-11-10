// CALCULADOR DE IVA BLOQUE A BLOQUE

function inputCosto(){
    let costo_inicial = parseInt(prompt('Inserte el precio de costo del producto a calcular en $ARS'))
    return costo_inicial
}

function calculoIVA(costo_inicial){
    let costo_iva = costo_inicial + (costo_inicial/100*21) 
    return costo_iva
}

function displayPrecio (calculoIVA){
    console.log(calculoIVA)
    alert('Este es el precio del producto luego del calculo del IVA: ' + calculoIVA )
}

function repeat(){

    let repeat = prompt('Quiere calcular otro producto? Y/N')
    
    if (repeat === 'Y'){
        return true
    }
    else{
        return false
    }

}

function execute(){

    displayPrecio(calculoIVA(inputCosto()))

}

execute()
while(repeat() == true){
    execute()
}