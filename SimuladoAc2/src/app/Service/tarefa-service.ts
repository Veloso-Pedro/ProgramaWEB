import { Injectable } from '@angular/core';

export interface Tarefa{
    nome: string;
    prazo: number;
    status: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TarefaService { 

    Listatarefas: Tarefa[] = []

    listar(){
       return this.Listatarefas
    }

    adicionar(nomeTarefa:string, qtdPrazo:number){
        const add: Tarefa = {
            nome: nomeTarefa,
            prazo: qtdPrazo,
            status: false
        }

        this.Listatarefas.push(add)
    }

    remover(index: number){

        this.Listatarefas.splice(index, 1)
    }

    prazoConclusao(){}

    marcarConcluida(index: number){
        this.Listatarefas[index].status = true
    }

    contadorTarefas(){
        var concluidos = 0;
        var pendentes = 0;
        var total = 0;

        for(var i = 0 ; i < this.Listatarefas.length; i++){
            if(this.Listatarefas[i].status == true){
                concluidos += 1
            }else{
                pendentes += 1
            }
        };

        total = concluidos + pendentes;

        return {total, concluidos, pendentes}
    }


}
