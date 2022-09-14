const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite um segundo número."))


function soma(x,y){
    console.log(`A soma de ${num1} e ${num2} é: `,x+y)
}

function subtracao(x,y){
    console.log(`A subtração de ${num1} e ${num2} é: `,x-y)
}

function multiplica(x,y){
    console.log(`A multiplicação de ${num1} e ${num2} é: `,x*y)
}

function divide(x,y){
    console.log(`A divisão de ${num1} e ${num2} é: `,x/y)
}



soma(num1,num2)
subtracao(num1,num2)
multiplica(num1,num2)
divide(num1,num2)