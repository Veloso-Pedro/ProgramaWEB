import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService, Tarefa } from '../Service/tarefa-service';
import { RouterLink } from '@angular/router';


@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-tarefa',
  styleUrl: './cadastrar-tarefa.css',
  templateUrl: './cadastrar-tarefa.html',
})
export class CadastrarTarefa {

  constructor( private tarefas : TarefaService){}

  adicionar(nome: string, prazo: string){
    this.tarefas.adicionar(nome, Number(prazo))
  }
}
