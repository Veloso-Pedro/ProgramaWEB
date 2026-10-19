import { Injectable } from '@angular/core';


interface Tarefas {
  id: number;
  titulo: String;
  descricao: String;
  data: Date;
  concluido: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  // Array 
  listaTarefas : Tarefas[] = []

  //Variaveis

  id: number = 1;
  titulo: String = "Teste";
  descricao: String = "Isso é um teste";
  data = new Date
  concluido: boolean = false;

  listar() {
    return this.listaTarefas;
  }

  adicionar() {
    const obj : Tarefas = {
      id : this.id,
      titulo : this.titulo,
      descricao : this.descricao, 
      data : this.data, 
      concluido : this.concluido
    }
    this.listaTarefas.push(obj)
  }

  remover() {
    this.listaTarefas.splice(this.id, 1)
  }

  prazo() {

  }

  
}
