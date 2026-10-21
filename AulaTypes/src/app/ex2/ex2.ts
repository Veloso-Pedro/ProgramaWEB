import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface fruta {
  nome: string;
  tipo: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-ex2',
  styleUrl: './ex2.css',
  templateUrl: './ex2.html',
})
export class Ex2 {
  
  listaFrutas: fruta[] = []

  adicionar(nomeFruta: string = '', tipoFruta: string = ''){
    const Selecionado : fruta = {
      nome: nomeFruta,
      tipo: tipoFruta
    }

    this.listaFrutas.push(Selecionado)
  }

  remover(index: number){
    this.listaFrutas.splice(index, 1)
  }

  alterar(index: number){
    const novoNome: string = prompt('Digite o novo nome:') || this.listaFrutas[index].nome;
    const novoTipo: string = prompt('Digite o novo tipo:') || this.listaFrutas[index].tipo;

    const fruta : fruta = {
      nome: novoNome,
      tipo: novoTipo
    }
    
    this.listaFrutas[index] = fruta
  }

}
