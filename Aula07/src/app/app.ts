import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: Date;
}

type Admin = { nome: string; nivel: number};
type User = { email: string };
type AdminUser = Admin & User;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('Aula07');

  post: Post = {
    id: 1,
    titulo: "Meu primeiro post",
    conteudo: "Este é o conteúdo do post...",
    autor: "Ana",
    data: new Date()
  };

  posts: Post[] = [
    {
      id: 1,
      titulo: "Angular é incrível",
      conteudo: "Hoje vamos aprender sobre diretivas e data binding.",
      autor: "Maria",
      data: new Date("2025-09-01")
    },
    {
      id: 2,
      titulo: "TypeScript ajuda demais",
      conteudo: "A tipagem forte evita muitos erros e dá mais segurança.",
      autor: "João",
      data: new Date("2025-09-05")
    }
  ]

  user: AdminUser = {
    nome: "Fabrício",
    nivel: 5,
    email: "fabriciotonettolondero@gmail.com"
  }

  valorAny: any = 123;

  valorUnknown: unknown = 'texto';

  entrada = '';


  setAny(){
    this.valorAny = this.entrada;
  }

  setunknow(){
    const n = Number(this.entrada);
    this.valorUnknown = isNaN(n) ? this.entrada : n;
  }

  toUpperIfString(v: unknown): string | null {
    return (typeof v === 'string') ? v.toUpperCase() : null;
  }
}
