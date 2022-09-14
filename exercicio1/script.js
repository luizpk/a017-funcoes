
//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function olaNome(nome){
    console.log(`Olá, ${nome}`) 
}

olaNome("Luiz")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

function tabuadaSeis(){
    for(var multiplicador = 1; multiplicador <= 10; multiplicador++) {

		console.log(6 * multiplicador);
	}
}

tabuadaSeis()

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const olaNome2=(nome)=>{
    console.log(`Olá, ${nome}`) 
}

olaNome2("Luiz")

const tabuada6 = ()=>{
    for(var multiplicador = 1; multiplicador <= 10; multiplicador++) {

    console.log(6 * multiplicador);
}
}

tabuada6();