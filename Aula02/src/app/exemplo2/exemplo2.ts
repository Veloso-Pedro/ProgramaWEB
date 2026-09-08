import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo2',
  imports: [],
  templateUrl: './exemplo2.html',
  styleUrl: './exemplo2.css',
})
export class Exemplo2 {
  contador:number = 0;
  incrementar() {this.contador++;}
  decrementar() {this.contador--;}
}
