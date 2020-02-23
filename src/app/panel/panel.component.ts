import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core'; //EventEmmiter core do angular

import { Phrase } from '../shared/phrase.model'
import { PHRASES } from './phrases-mock' // importando PHRASES de phrases-mock.ts as frases do array 

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: Phrase[] = PHRASES // recuperado o array de frases importado do mock
  public instruction: string = 'Translate to portuguese: '
  public answer: string = '' //inicializar com '' para nao ocorrer undefinid
  public round: number = 0
  public roundPhrase: Phrase
  public progress: number = 0
  public attempts: number = 3 //Isso porque temos 3 tentativas ou 3 coracoes...
  @Output() public endGame: EventEmitter<string> = new EventEmitter() //decorando com Output() para que este objeto possa ser exposto para componentes pai(app.component).

  constructor() {
    this.updateRound()

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  public updateAnswer(answer: Event): void { // classe para pegar a resposta do campo de texto com tipo Event
    this.answer = (<HTMLInputElement>answer.target).value //manda para o $event do panel.component.ts acessando o atributo html do target desse elemento
  }

  public checkAnswer(): void { //quando o usuario clica em check essa função é disparada
    //console.log(this.roundPhrase)

    if (this.roundPhrase.phrasePtBr == this.answer) { //this.answer é preenchido com o valor do value do <HTMLInputEmelent>answer.target
      //ou seja... se a frase digitada for igual a frase correta a instrução continuara...
      //trocar a pergunta da rodada
      alert('TRADUCTION IS CORRECT!')

      //trocar a pergunta da rodada
      this.round++

      //barra de progresso... como são 4 frases, crescerá 25% em cada acerto.
      this.progress = this.progress + (100 / this.phrases.length)


      //concluindo o game
      if (this.round === 4) {
        this.endGame.emit('Victory')
      }

      //atualiza o objeto da rodada
      this.updateRound()

    } else {

      alert('***TRADUCTION INCORRECT!***')

      //diminuir a variavel attempt/tentativa
      this.attempts--

      if (this.attempts === -1) {
        this.endGame.emit('defeat')
      }
    }


  }
  public updateRound(): void {
    this.roundPhrase = this.phrases[this.round]  //aqui recupera-se a frase da rodada no array recuperado de round iniciado em 0 (para ser dinamico)

    //limpar a resposta anterior
    this.answer = ''
  }
}
