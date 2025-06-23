let amigo = {
    nome: "Dan", 
    idade: 18, 
    peso: 67.2 , engordar(p=0){
        console.log("Engordou")
        this.peso += p 
    }}
    amigo.engordar(0)
    console.log(`Seu nome é ${amigo.nome} e você tem ${amigo.idade} anos e pesa ${amigo.peso}KGs`)