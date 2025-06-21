let valores = [8, 7 , 6 ,3, 0 ,8]
valores.sort() //  deixa na ordem crescente
/*
for (let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){ //simplifica a forma de mostrar os valores 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}