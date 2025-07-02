


function validar(){
    
    let cpf = document.getElementById("input-cpf").value
    cpf = cpf.replace(/\D/g, '')
    let res = document.getElementById('res')
    
    if(cpf === ''){
        res.innerHTML =("Digite um CPF Valido!")
        return;
    }
    if(cpf.length !== 11){
        res.innerHTML =("Digite um CPF Valido!")
        return;
    }

    res.innerHTML = ('Seu CPF foi validado com sucesso!')
     document.getElementById("input-cpf").value = ''
     document.getElementById("input-cpf").focus()
     
    
}