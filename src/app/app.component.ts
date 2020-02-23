import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public gameInProgress: boolean = true
  public typeClosing: string
  
  public endGame(type: string): void {  
    this.gameInProgress = false
    this.typeClosing = type
  }

  public restartGame(): void { //Metodo para reiniciar o jogo
    this.gameInProgress = true
    this.typeClosing = undefined
  }
}
