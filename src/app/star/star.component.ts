import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star', //funciona como tag para chamar no html
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() //quando quero criar uma variavel e permitir que ela receba valores de outro componente
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5; //calculo baseado no (npm install font-awesome) ele tem o recurso pronto das estrelas
  }

}
