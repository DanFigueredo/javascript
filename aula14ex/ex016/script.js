

function contar(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var passo = Number (document.getElementById("passo").value)
    var res = document.getElementById("res") 
     
    if(passo <= 0){
        alert("O passo 0 não pode ser utilizado, considerando 1")
        passo = 1
    }
    if (n1 < n2){
        while(n1 <= n2){
            res.innerHTML += `${n1}`
            n1+=passo
        }
    } else{
    while(n1 >= n2)
        res.innerHTML += `${n1}`
        n1-=passo
    }

    
}