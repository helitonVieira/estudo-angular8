import { NavBarComponent } from './nav-bar/nav-bar.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ReplacePipe } from './pipe/replace.pipe';

import { StarComponent } from './star/star.component';
import { AppComponent } from './app.component';
import { CursoListComponent } from './cursos/curso-lista.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'cursos', pathMatch:'full' //acessar rota raiz vazia vai redirecionar para cursos pathMatch obrigatorio
      },
      {
        path:'cursos', component: CursoListComponent // criando a rota cursos apontando para o componente
      },
      {
        path:'**', component: Error404Component //rota não existe vai para pagina de erro
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
