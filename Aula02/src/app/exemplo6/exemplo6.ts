import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo6',
  imports: [],
  templateUrl: './exemplo6.html',
  styleUrl: './exemplo6.css',
})
export class Exemplo6 {
  frutas: string[] = ['Maça', 'Banana', 'Laranja'];
  selecionada: string = '';
}
