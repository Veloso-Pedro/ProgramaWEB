import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Produto = {nome: string; valor: number};

@Component({
  imports: [FormsModule],
  selector: 'app-ex1',
  styleUrl: './ex1.css',
  templateUrl: './ex1.html',
})
export class Ex1 {
    carrinho: Produto[] = []
    nomeProduto: string = "";
    valorProduto: number = 0;

    adicionar(){
      const novoProduto: Produto = {
        nome : this.nomeProduto,
        valor : this.valorProduto
      };
      this.carrinho.push(novoProduto)
    }
}
