let num = document.getElementById("fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = [] //Declarando todas as variaveis e usando um vetor para guardar os numeros futuramente

function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value , valores)){
        valores.push(Number(num.value)) //push() Adicona elementos no vetor
        let item = document.createElement("option")
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = "" //Faz com que quando o usuario digite outro numero com a finalização ja feita, ela some 
        
    }else{
        alert("Valor invalido ou ja encontrado na lista.")
    } //Verifica se o numero que foi digitado esta dentro dos parametros do sistema

    num.value = "" //faz com que o numero que ja foi adicionado seja apagado para digitar outro
    num.focus() // faz com o que o cursor mude de volta para digitar
}



function fln(){
    
    if(valores.length == 0){
        alert("Adicione valores")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } if (valores[pos] < menor){
                menor = valores[pos]
            } //O for faz com que analise um por um e verifique qual deles é o maior e o menor
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números ao todo </p>` 
        res.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>A media dos valores é igual a ${media} </p>`
        

   }
}