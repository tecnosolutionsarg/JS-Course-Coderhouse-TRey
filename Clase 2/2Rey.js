let lado_a = parseInt(prompt('Inserte la medida del lado A'))
let lado_b = parseInt(prompt('Inserte la medida del lado B'))
let lado_c = parseInt(prompt('Inserte la medida del lado C'))

if(lado_a == lado_b && lado_b == lado_c && lado_c == lado_a){
    console.log('Su triangulo es Equilatero')
}
else if(lado_a == lado_b && lado_a != lado_c && lado_b != lado_c ||  lado_b == lado_c && lado_b != lado_a && lado_c != lado_a  ||  lado_c == lado_a && lado_c != lado_b && lado_a != lado_b){

    console.log('Su triangulo es Isosceles')
}
else{
    console.log('Su triangulo es Escaleno')
}