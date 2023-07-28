import {Component, OnInit} from '@angular/core';
import {Card, CardsService} from "../cards.service";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent{

  public page: number = 1

  cards2: Card[] = this.cardsService.cards

  constructor(public cardsService: CardsService) {
    this.page = 1
    this.page = this.cards2.length
  }

}
