import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Card, CardsService} from "../cards.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  card: Card | undefined

  constructor(private route: ActivatedRoute,
              public cardsService: CardsService) {
  }

  ngOnInit():void  {
    this.route.params.subscribe( (params: Params) =>{
      this.card = this.cardsService.getById(+params.id)

    })
  }

}
