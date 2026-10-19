import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex1',
  imports: [FormsModule],
  templateUrl: './ex1.html',
  styleUrl: './ex1.css',
})
export class Ex1 {
  getAnoNascimento(){
    let idade:number;
    const data = new Date()
    let ano = data.getFullYear
    


  }
}
