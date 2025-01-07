alert('Boas vindas ao jogo de numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

while( chute != numeroSecreto){
    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    if( chute == numeroSecreto ){
        break;
    }else{

        if(chute < numeroSecreto){
            alert(`o numero secreto é maior que ${chute}`);
        }else{
            alert(`o numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}
//utilizando operador ternario na condição para que seja possivel exibir a palavra no plural ou singular
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
