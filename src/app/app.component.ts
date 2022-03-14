import { Component } from '@angular/core';
import { Card } from 'src/Modal/Card';
import { CardApiServiceService } from 'src/Service/card-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CardGameFrontend';
  sortedCardTitle = "Sorted Order";
  randomCardTitle = "Input Order";

  randomCards: Card[] = [];
  sortedCards: Card[] = [];
  constructor(private service: CardApiServiceService) { }

  ngOnInit(): void {

  }

  getSortedCards(randomKeys: HTMLInputElement) {

    this.randomCards = [];
    this.sortedCards = [];
    this.createRandomCards(randomKeys.value);
    this.service.getAllSortedCards(randomKeys.value)
      .subscribe(response => this.sortedCards = response);
  }

  createRandomCards(randomValues: string) {

    var inputCards = randomValues.split(',');

    inputCards.forEach(element => {
      let elementCharArray = [...element];

      this.randomCards.push({

        suit: elementCharArray[elementCharArray.length - 1].toUpperCase()
        , value: elementCharArray.splice(0, element.length - 1).join("")
      })
    });

  }


}
