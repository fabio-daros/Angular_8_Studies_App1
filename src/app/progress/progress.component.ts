import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

 @Input() public progress: number = 0 // variavel responsavel por jogar o valor da barra via string interpolation para o progress.component.html
 //@Input() - decorando a variavel progress para que possa receber valores do painel externo... (deve-se importar tambem do angular)
  
 constructor() { }

  ngOnInit() {

  }
}
