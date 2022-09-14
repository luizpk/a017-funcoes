

function soma(){
    let x = Number(prompt("Digite um número."))
    let y = Number(prompt("Digite um segundo número"))
    console.log(`A soma de ${x} e ${y} é `, x+y)
}

soma()





function booleano(x,y){
    if(x>=y){
    console.log(true)
    }else{
        console.log(false)
    }
}

booleano(1,6)
booleano(7,6)
booleano(6,6)



function par(){
    let num = Number(prompt("Digite um número para saber se le é par."))
    let verifcaPar = Boolean(num%2===0)
    if(verifcaPar==true){
        console.log(`${num} é um número par`)
    } else{
        console.log(`${num} é um número impar`)
    }
}
 par()

 

 function mensagem(){
    let texto = prompt("Digite sua mensagem.")
    console.log(texto.length)
    console.log (texto.toUpperCase())
   
 }

 mensagem()