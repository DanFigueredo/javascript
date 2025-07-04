//função pra quando clicar no botão de se inscrever
function subscribeButton(){
    //pegando os valores e fazendo as variaveis 
    let email = document.getElementById("input-email")
    let res = document.querySelector("#res")
    //Caso o usuario não tenha digitado nada no input
    if(email.value == ""){
        res.style.color = "red" //cor do texto vermelho
        res.innerHTML = "Valid email required!" //Um aviso para o usuario digitar um email valido
        email.style.border = "1px solid red"; //bordas ficam vermelhas pra sinalizar negativo
        email.style.color = "red"
        return // Para a função acabar aqui caso o if esteja true 
            
    }
    location.href = "/projeto/pg02.html" // Quando clicar no botão o usuario é levado em outra pagina
}

