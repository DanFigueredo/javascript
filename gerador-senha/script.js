let passwordlength = 16
const inputEl = document.querySelector("#password")
function generatePassword(){
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@#*" //São os caractheres que vão ser usados para fazer a senha
    let password = ""
    for(let i = 0; i < passwordlength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1) //Faz com que a senha seja criada com os caractheres sendo aleatorios

    }
    
    inputEl.value = password
    

}

function copy(){
    navigator.clipboard.writeText(inputEl.value)
}

const passwordlengthEL = document.querySelector("#password-length")
passwordlengthEL.addEventListener("input", function (){
passwordlength = passwordlengthEL.value
generatePassword()
    
})

const copyButtonEl = document.querySelector("#copy")
copyButtonEl.addEventListener('click', copy)



