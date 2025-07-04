function subscribeButton(){
    let email = document.getElementById("input-email")
    let res = document.querySelector("#res")
    if(email.value == ""){
        res.style.color = "red"
        res.innerHTML = "Insira um texto valido!"
        email.style.border = "1px solid red";
        email.style.color = "red"
        return
            
    }
    location.href = "http://127.0.0.1:5501/projeto/pg02.html"
}

