var idade  = 65
console.log(`Vc tem ${idade} anos`)
if (idade < 16){

    console.log("Não vota")
} else if ( idade < 18 || idade >= 65){
    console.log("voto opcional")
} else{
    console.log("Voto obrigatorio")
}
