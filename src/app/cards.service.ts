import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";


export interface Card {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
}

export interface Rick {
  info: Object,
  results: [],
}

@Injectable({providedIn: 'root'})
export class CardsService {



  cards: Card[] = []


  imageSrc = 'assets/images/icon.png'
  imageAlt = 'link'


  imageSrc2 = 'assets/images/icon-pagination.png'
  imageAlt2 = 'page'

  fetchRicks() :void{
    this.http.get<Rick>('https://rickandmortyapi.com/api/character')
      .subscribe(ricks => {
        this.cards = ricks.results
      })
}

  getById(id:number) {
    return this.cards.find(p => p.id === id)
  }


  constructor(public http: HttpClient) {
  }
}
