import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../Service/tarefa-service';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-listar-tarefas',
  styleUrl: './listar-tarefas.css',
  templateUrl: './listar-tarefas.html',
})
export class ListarTarefas {

  lt: Tarefa[];
  constructor( private lista : TarefaService){
    this.lt =this.lista.listar();
  }

  remover(index: number){
    this.lista.remover(index);
  }

  concluir(index: number){
    this.lista.marcarConcluida(index);
  }
}
