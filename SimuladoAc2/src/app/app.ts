import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaService } from './Service/tarefa-service';

interface Tarefas {
  id: number;
  titulo: String;
  descricao: String;
  data: Date;
  concluido: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SimuladoAc2');

  listaTarefas : Tarefas[] = [];

  constructor ( ts : TarefaService){
    this.listaTarefas = ts.listar();
  }
}
