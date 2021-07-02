import { Component, Input, OnInit } from '@angular/core';
import { CardData } from './carddata.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data:CardData;
  constructor() {
    this.data=new CardData("","","","","");
   }

  ngOnInit(): void {
  }

}
