class Funcoes {
    constructor(){
        throw new error("Não pode ser construida")
    }

    static sigmoid(x){
        return 1 / (1 + Math.exp(-x) )
    }

    static dsigmoid(x){
        return x * (1-x)
    }
}