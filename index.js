const readlineSync = require('readline-sync');

class infoHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "faca";
                break;
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

function main(){
    let createNewHero;
    do{
        let newHero = askHeroInfos();
        newHero.atacar();

        createNewHero = readlineSync.question("Quer atacar com outro Heroi? (S / N) ");
        switch(createNewHero){
            case "S":
            case "s":
            case "Sim":
            case "SIM":
            case "sim":
                createNewHero = true;
                break;
            default:
                createNewHero = false;
                break;
        }
    }while(createNewHero === true);
}

function askHeroInfos(){
    let heroName = readlineSync.question("Digite o nome do Heroi: ");
    let heroAge = readlineSync.question("Digite a idade do Heroi: ");
    let heroType = readlineSync.question("Digite a classe do Heroi (mago | guerreiro | monge | ninja): ")

    let newHero = new infoHeroi(heroName, heroAge, heroType);

    return newHero;
}

main();
