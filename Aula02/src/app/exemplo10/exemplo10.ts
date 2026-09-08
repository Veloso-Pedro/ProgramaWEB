import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo10',
  imports: [FormsModule],
  templateUrl: './exemplo10.html',
  styleUrl: './exemplo10.css',
})
export class Exemplo10 {
  email = '';
  enviar(){ alert(`Email enviado para ${this.email}`)};
}
