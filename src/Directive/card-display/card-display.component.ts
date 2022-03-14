import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/Modal/Card';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {

  @Input('cardList') cardList: Card[] = [];
  @Input('headerTitle') headerTitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  getcolor(card: Card) {
    return card.suit === "S" || card.suit === "C" ? "black" : "red"
  }

  getTitle() {
    if (this.cardList.length > 0)
      return this.headerTitle;
    else
      return "";
  }
  getSuitGliph(card: Card) {
    switch (card.suit) {
      case "D":
        return "♦"
      case "S":
        return "♣"
      case "C":
        return "♠"
      case "H":
        return "♥"
      case "T":
        return "★"
      default:
        return "!"

    }
  }
}
