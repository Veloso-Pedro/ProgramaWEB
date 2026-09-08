import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo3',
  imports: [FormsModule],
  templateUrl: './exemplo3.html',
  styleUrl: './exemplo3.css',
})
export class Exemplo3 {
  nome: string ='';
}
