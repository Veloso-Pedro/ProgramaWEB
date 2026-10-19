import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Produtos = {id : number; nome: string}

@Component({
  selector: 'app-exercicio1',
  imports: [FormsModule],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css',
})
export class Exercicio1 {

  produtos: Produtos[] = []

  codigo: number = 0;
  nome: string = '';

  addProduto() {

    const produto : Produtos = {
      id: this.codigo,
      nome: this.nome
    };

    this.produtos.push(produto)
  }
}
