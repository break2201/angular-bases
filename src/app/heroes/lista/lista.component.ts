import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public heroName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman'];

  public heroeEliminado?: string;

  borrarUltimoHeroe(): void {

    this.heroeEliminado = this.heroName.pop();
    // console.log(heroeEliminado);
    
  }

}
