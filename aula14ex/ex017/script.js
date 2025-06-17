

function calcular(){

    var n1 = Number (document.getElementById("n1").value)
    var cl1 = document.getElementById("calcular")
    var res = document.getElementById("res")

    if (Number (n1 =='')){
        
        alert("Adicione um numero, considerando 1 ")
        n1 = 1
        
    }

    res.innerHTML = ""

    var contador = 1 
    while(contador <=10){
        var item = document.createElement('option')
        item.text = `${n1} X ${contador} = ${n1 * contador}`
        res.appendChild(item)
        contador++
    }
}  