import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnChanges, OnInit  {

  @Input() public attempts: number

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ] // array de coracoes 4 (caso queira colocar mais coracoes no jogo basta instanciar mais Heart no array...)

  constructor() {

  }

  ngOnChanges() { //inicializado uma unica vez na inicializacao do componente.
                  //informcao importante aqui: this.attempts
                  //comparar this.attemps e this.hearts.lenght
                  
    if(this.attempts!== this.hearts.length) {
      let index = this.hearts.length - this.attempts
      
      this.hearts[index - 1].full = false //deve-se decrementar 1 porque o primeiro coracao é de indice 0;
    }
  }

  ngOnInit() { 
   
  }
}
