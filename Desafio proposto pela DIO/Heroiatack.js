// Classe do heroi
class Heroi {
    // Nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Bem metodistico
    atacar() {
        let ataque;
        // Qual heroi ?
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque genérico';
        }

        // Tipo de ataque
        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}


const carlinha = new Heroi("carlinha", 25, "mago");

const jãodococo = new Heroi("jãodococo", 30, "guerreiro");

const espinosa = new Heroi("espinosa", 22, "monge");

const darwin = new Heroi("darwin", 28, "ninja");

// Quem bateu ? ah há!!
console.log("\nSaída Final:\n");
carlinha.atacar();
jãodococo.atacar();
espinosa.atacar();
darwin.atacar();
