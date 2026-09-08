import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo9',
  imports: [],
  templateUrl: './exemplo9.html',
  styleUrl: './exemplo9.css',
})
export class Exemplo9 {
  lista: string[] = [];
  adicionarItem(event:any){
    this.lista.push(event.target.value);
    event.target.value
  }
  removerItem(event:any){
    
  }

}
