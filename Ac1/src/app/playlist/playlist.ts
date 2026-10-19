import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist',
  imports: [FormsModule],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist {

  musicas: string[] = ['Musica1', 'Musica2', 'Musica3', 'Musica4', 'Musica5']

  selecionada: string = ''

  adicionar: string = ''

  status: boolean = false

  curtidas: number = 0

 
  curtidasMusicas(){
    this.curtidas = 0
  }

  adicionarMusica(event:any){
    this.musicas.push(this.adicionar);
  }

  incrementar(){
    this.curtidas++
  }


  




  

}
