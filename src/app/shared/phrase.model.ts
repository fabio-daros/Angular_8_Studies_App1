export class Phrase {

    //public phraseEng: string -> Deixei comentado porque dá para declarar diretamente dentro do construtor conforme feito a baixo
    //public phrasePtBr: string -> Deixei comentado porque da para declarar diretamente dentro do construtor conforme feito a baixo

    constructor(public phraseEng: string, public phrasePtBr: string) {
        this.phraseEng = phraseEng
        this.phrasePtBr = phrasePtBr
    }
}