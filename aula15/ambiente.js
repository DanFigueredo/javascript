let num = [5, 6 ,7]
num[3] = 8 //aqui ele adiciona valor ao array
num.push(9) // Aqui ele atribui um valor a um ultimo elemento sem precisar especificar, com (9) sendo o valor

num.sort()
console.log(`Esse é o array num =  ${num}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log(" o valor não foi encontrado")
}else{
    console.log(`o valor esta na posição ${pos}`)
}