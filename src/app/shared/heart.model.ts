export class Heart {
    constructor(public full: boolean,
        public urlFullHeart: string = '/assets/heart_full.png',
        public urlEmptyHeart: string = '/assets/heart_empty.png') {

    }

    public showHeart(): string {
        if (this.full) {             //se oracao estiver cheio chama a url com a imagem do coracao cheio
            return this.urlFullHeart 
        } else {                     //senao chama a url de coracao vazio
            return this.urlEmptyHeart
        }
    }
}