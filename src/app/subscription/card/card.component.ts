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
    if(this.data.description.length>50){
      this.data.description = this.data.description.substring(0,50);
      this.data.description += "..."
    }
  }

}
