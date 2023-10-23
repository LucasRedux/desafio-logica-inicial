let nomeDoHeroi = "Lucas"
let xpDoHeroi = 9000

switch (true) {
    case xpDoHeroi <= 1000: 
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Ferro")
        break;

    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000: 
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Bronze")
        break;

    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000: 
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Prata")
        break;

    case xpDoHeroi >= 6001 && xpDoHeroi <= 7000: 
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Ouro")
        break;

    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000: 
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Platina")
        break;

    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000: 
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Ascendente")
        break;

    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Imortal")
        break;

    case xpDoHeroi >= 10001:
        console.log("O Heroi de nome: " + nomeDoHeroi + " está no nível de Radiante")
        break;
}


