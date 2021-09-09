import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-lista.component.html'
})

export class CursoListComponent implements OnInit {

  cursos: Curso[] = [];

  ngOnInit(): void {
    this.cursos = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '',
        price: 9.89,
        code: 'XPS-3595',
        duration: 120,
        rating: 5.8,
        releaseDate: 'November, 4, 2021'
      },
      {
        id: 2,
        name: 'Angular HTTP',
        imageUrl: '',
        price: 19.99,
        code: 'XPS-3696',
        duration: 240,
        rating: 4.2,
        releaseDate: 'November, 18, 2021'
      }
    ]
  }

}