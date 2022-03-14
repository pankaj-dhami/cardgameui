import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service.service';
import { Card } from 'src/Modal/Card';

@Injectable({
  providedIn: 'root'
})
export class CardApiServiceService extends DataService<Card> {
  constructor(httpClient: HttpClient) {
    super("https://cardgame001api.azurewebsites.net/api/SortedCard", httpClient);
  }

  getAllSortedCards(param: string) {

    var encoded = encodeURIComponent(param);
    return this.getAll('?randomStrings=' + encoded);
  }
}
