import { Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefas } from './listar-tarefas/listar-tarefas';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastrar-tarefa', pathMatch: 'full' },
    {path: 'cadastrar-tarefa', component: CadastrarTarefa},
    {path: 'listar-tarefa', component: ListarTarefas}
];
