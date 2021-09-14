import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
    templateUrl: './curso-info.component.html'
})
export class CursoInfoComponent implements OnInit {
    cursoId: number;
    curso: Curso;

    constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService) { }

    ngOnInit(): void {
      this.curso = this.cursoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
      /*  this.cursoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: curso => this.curso = curso,
            error: err => console.log('Error', err)
        });*/
    }

    save(): void {
      this.cursoService.save(this.curso);
     /*   this.cursoService.save(this.curso).subscribe({
            next: curso => console.log('Saved with success', curso),
            error: err => console.log('Error', err)
        });*/
    }

}
