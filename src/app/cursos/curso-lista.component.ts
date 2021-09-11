import { CursoService } from './curso.service';
import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
@Component({
  //selector: 'app-curso-list',
  templateUrl: './curso-lista.component.html'
})

export class CursoListComponent implements OnInit {

  _cursos: Curso[] = [];
  _filterBy: string;
  filteredCourses: Curso[] = [];

  constructor(private cursoService: CursoService) { } //injeçao de dependencia quando carrega curso.service ele percebe e carrega aqui

  ngOnInit(): void {
    this._cursos = this.cursoService.retrieveAll();
    this.filteredCourses = this._cursos;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._cursos.filter((cursos: Curso) => cursos.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
}

get filter() {
    return this._filterBy;
}

}
