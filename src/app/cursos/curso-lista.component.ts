import { CursoService } from './curso.service';
import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-lista.component.html'
})

export class CursoListComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) { } //injeçao de dependencia quando carrega curso.service ele percebe e carrega aqui

  ngOnInit(): void {
    this.cursos = this.cursoService.retrieveAll();
  }

}
