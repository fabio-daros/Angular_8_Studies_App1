//classe que vai controlar a view

import { Component } from '@angular/core'

@Component({   //função component que vem do core do angular ... um decorator
    selector: 'app-top',                      //rotulo usado como html element dentro dos templates
    templateUrl: './top.component.html',     //todo component tem que ter um template e view .... (sao as mesmas coisas)....(recurso visual)
    //styles: [`.exemple { color: red } `]  // CSS in Line exemplo... o ideal é que esteja externo
    styleUrls: ['./top.component.css']     //CSS puxando de um novo componente : top.component.css
})                
export class TopComponent {
    public title: string = 'Learning Portuguese'
} 