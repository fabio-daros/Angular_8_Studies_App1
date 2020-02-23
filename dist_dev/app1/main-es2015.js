(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top></app-top>\n\n<div *ngIf=\"gameInProgress; else endOfGame\">\n    <!--tratativa de teste para checar se o jogo ainda esta em curso se false o proximo não será executado destruindo o painel-->\n    <app-panel (endGame)=\"endGame($event)\"></app-panel>\n    <!--Evento emitido pelo filho panel.component.ts-->\n</div>\n    <!--Aqui é exibida a mensagem de derrota diretamente no painel principal-->\n<ng-template #endOfGame>\n    <div *ngIf=\"typeClosing === 'defeat'; else endOfGameVictory \" class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color: red\"> Game Over, You Lost the game! </h3>\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\">Try Again?</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #endOfGameVictory>\n    <div class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color: green\"> Congratulations! You Win! </h3>\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\">Play Again?</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/attempts/attempts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attempts/attempts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HardCoded... <img [src]=\"emptyHeart\"> Ao usar os [] no src o angular sabe que trata-se de propertybinding puxandos as imagens ou assets do attempts.component.ts-->\n<!-- HardCoded... <img [src]=\"fullHeart\">  Ao usar os [] no src o angular sabe que trata-se de propertybinding puxandos as imagens ou assets do attempts.component.ts-->\n<!-- HardCoded... <img [src]=\"fullHeart\">  Ao usar os [] no src o angular sabe que trata-se de propertybinding puxandos as imagens ou assets do attempts.component.ts-->\n\n<!--OBS: nunca usar o {{}} com o [] interpolation e propertybiding-->\n\n<img *ngFor=\"let heart of hearts\" [src]=\"heart.showHeart()\" /> <!-- Pega a classe do heart.model.ts usando o array de coracoes-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/panel/panel.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/panel/panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class='row'>\n            <div class=\"col-sm-6\">\n                <app-progress [progress]=\"progress\"></app-progress>\n                <!--Componente progresso dentro do painel para enviar para o progresso no @Input()-->\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"d-flex justify-content-end\">\n                    <app-attempts [attempts]=\"attempts\"></app-attempts>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <h6>{{ instruction }}</h6>\n                <!--recuperando a instrução com string interpolation {{}}-->\n                \n                <p>{{ roundPhrase.phraseEng }}</p>\n                <!--recuperando o objeto phrases na posicao de array 0 com string interpolation {{}} que será apresentada no panel-->\n\n                <!--PEGANDO O QUE FOI DIGITADO NA CAIXA DE TEXTO-->\n\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" rows=\"1\" (input)=\"updateAnswer($event)\" [value]=\"answer\"></textarea>\n                    <!--[value] two way bind para limpar o campo digitado-->\n                    <!--(input) associado a classe responsavel por pegar o que foi digitado em panel.component.ts-->\n                    <!--$event é uma palavra reservada do angular que serve para pegar o conteudo de um campo que esta sendo digitado por exemplo-->\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"d-flex justify-content-end\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkAnswer()\">CHECK_.</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progress/progress.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progress/progress.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n        <div class=\"progress-bar w-{{ progress }}\"></div> <!--classe do bootstrap --- {{ progress }} string interpolation provindo do progress.component.ts-->\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top/top.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top/top.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-faded\">\r\n    <h1 class=\"navbar-brand mb-0\">{{ title }}</h1> <!-- Ao abrir e fechar chaves duas vezes usamos uma interpolação, provinda do top.component.ts ou seja da class (One way Databinding)-->\r\n  </nav>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-size: 25px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.gameInProgress = true;
    }
    endGame(type) {
        this.gameInProgress = false;
        this.typeClosing = type;
    }
    restartGame() {
        this.gameInProgress = true;
        this.typeClosing = undefined;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _attempts_attempts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attempts/attempts.component */ "./src/app/attempts/attempts.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"],
            _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"],
            _attempts_attempts_component__WEBPACK_IMPORTED_MODULE_7__["AttemptsComponent"],
            _progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/attempts/attempts.component.css":
/*!*************************************************!*\
  !*** ./src/app/attempts/attempts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGVtcHRzL2F0dGVtcHRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/attempts/attempts.component.ts":
/*!************************************************!*\
  !*** ./src/app/attempts/attempts.component.ts ***!
  \************************************************/
/*! exports provided: AttemptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttemptsComponent", function() { return AttemptsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_heart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/heart.model */ "./src/app/shared/heart.model.ts");



let AttemptsComponent = class AttemptsComponent {
    constructor() {
        this.hearts = [
            new _shared_heart_model__WEBPACK_IMPORTED_MODULE_2__["Heart"](true),
            new _shared_heart_model__WEBPACK_IMPORTED_MODULE_2__["Heart"](true),
            new _shared_heart_model__WEBPACK_IMPORTED_MODULE_2__["Heart"](true)
        ]; // array de coracoes 4 (caso queira colocar mais coracoes no jogo basta instanciar mais Heart no array...)
    }
    ngOnChanges() {
        //informcao importante aqui: this.attempts
        //comparar this.attemps e this.hearts.lenght
        if (this.attempts !== this.hearts.length) {
            let index = this.hearts.length - this.attempts;
            this.hearts[index - 1].full = false; //deve-se decrementar 1 porque o primeiro coracao é de indice 0;
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AttemptsComponent.prototype, "attempts", void 0);
AttemptsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attempts',
        template: __webpack_require__(/*! raw-loader!./attempts.component.html */ "./node_modules/raw-loader/index.js!./src/app/attempts/attempts.component.html"),
        styles: [__webpack_require__(/*! ./attempts.component.css */ "./src/app/attempts/attempts.component.css")]
    })
], AttemptsComponent);



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9COztBQUV4QiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _phrases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phrases-mock */ "./src/app/panel/phrases-mock.ts");

 //EventEmmiter core do angular
 // importando PHRASES de phrases-mock.ts as frases do array 
let PanelComponent = class PanelComponent {
    constructor() {
        this.phrases = _phrases_mock__WEBPACK_IMPORTED_MODULE_2__["PHRASES"]; // recuperado o array de frases importado do mock
        this.instruction = 'Translate to portuguese: ';
        this.answer = ''; //inicializar com '' para nao ocorrer undefinid
        this.round = 0;
        this.progress = 0;
        this.attempts = 3; //Isso porque temos 3 tentativas ou 3 coracoes...
        this.endGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //decorando com Output() para que este objeto possa ser exposto para componentes pai(app.component).
        this.updateRound();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    updateAnswer(answer) {
        this.answer = answer.target.value; //manda para o $event do panel.component.ts acessando o atributo html do target desse elemento
    }
    checkAnswer() {
        //console.log(this.roundPhrase)
        if (this.roundPhrase.phrasePtBr == this.answer) { //this.answer é preenchido com o valor do value do <HTMLInputEmelent>answer.target
            //ou seja... se a frase digitada for igual a frase correta a instrução continuara...
            //trocar a pergunta da rodada
            alert('TRADUCTION IS CORRECT!');
            //trocar a pergunta da rodada
            this.round++;
            //barra de progresso... como são 4 frases, crescerá 25% em cada acerto.
            this.progress = this.progress + (100 / this.phrases.length);
            //concluindo o game
            if (this.round === 4) {
                this.endGame.emit('Victory');
            }
            //atualiza o objeto da rodada
            this.updateRound();
        }
        else {
            alert('***TRADUCTION INCORRECT!***');
            //diminuir a variavel attempt/tentativa
            this.attempts--;
            if (this.attempts === -1) {
                this.endGame.emit('defeat');
            }
        }
    }
    updateRound() {
        this.roundPhrase = this.phrases[this.round]; //aqui recupera-se a frase da rodada no array recuperado de round iniciado em 0 (para ser dinamico)
        //limpar a resposta anterior
        this.answer = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PanelComponent.prototype, "endGame", void 0);
PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel',
        template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/panel/panel.component.html"),
        styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
    })
], PanelComponent);



/***/ }),

/***/ "./src/app/panel/phrases-mock.ts":
/*!***************************************!*\
  !*** ./src/app/panel/phrases-mock.ts ***!
  \***************************************/
/*! exports provided: PHRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHRASES", function() { return PHRASES; });
// fazendo o mock dentro de panel porque as frases aparecerao no painel.
//aqui esta o array com as frases usadas....
const PHRASES = [
    { phraseEng: 'I like to learn', phrasePtBr: 'Eu gosto de aprender' },
    { phraseEng: 'I watch tv', phrasePtBr: 'Eu assisto tv' },
    { phraseEng: 'How are you?', phrasePtBr: 'Como vai você?' },
    { phraseEng: 'I eat bread', phrasePtBr: 'Eu como pão' }
];


/***/ }),

/***/ "./src/app/progress/progress.component.css":
/*!*************************************************!*\
  !*** ./src/app/progress/progress.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\r\n    background: #EEF8DA;\r\n    border: solid 1px #99CE28 \r\n}\r\n.progress-bar {\r\n    background: #99CE28 \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVGOERBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzk5Q0UyOCBcclxufVxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OUNFMjggXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressComponent = class ProgressComponent {
    //@Input() - decorando a variavel progress para que possa receber valores do painel externo... (deve-se importar tambem do angular)
    constructor() {
        this.progress = 0; // variavel responsavel por jogar o valor da barra via string interpolation para o progress.component.html
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressComponent.prototype, "progress", void 0);
ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress',
        template: __webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/progress/progress.component.html"),
        styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/progress/progress.component.css")]
    })
], ProgressComponent);



/***/ }),

/***/ "./src/app/shared/heart.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/heart.model.ts ***!
  \***************************************/
/*! exports provided: Heart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heart", function() { return Heart; });
class Heart {
    constructor(full, urlFullHeart = '/assets/heart_full.png', urlEmptyHeart = '/assets/heart_empty.png') {
        this.full = full;
        this.urlFullHeart = urlFullHeart;
        this.urlEmptyHeart = urlEmptyHeart;
    }
    showHeart() {
        if (this.full) { //se oracao estiver cheio chama a url com a imagem do coracao cheio
            return this.urlFullHeart;
        }
        else { //senao chama a url de coracao vazio
            return this.urlEmptyHeart;
        }
    }
}
Heart.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/top/top.component.css":
/*!***************************************!*\
  !*** ./src/app/top/top.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar { \r\n    background:#1CB0F6\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RvcC90b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIgeyBcclxuICAgIGJhY2tncm91bmQ6IzFDQjBGNlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/top/top.component.ts":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
//classe que vai controlar a view


let TopComponent = class TopComponent {
    constructor() {
        this.title = 'Learning Portuguese';
    }
};
TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top',
        template: __webpack_require__(/*! raw-loader!./top.component.html */ "./node_modules/raw-loader/index.js!./src/app/top/top.component.html"),
        styles: [__webpack_require__(/*! ./top.component.css */ "./src/app/top/top.component.css")]
    })
], TopComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\projetos\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map