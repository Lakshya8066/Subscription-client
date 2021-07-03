import { Component, OnInit } from '@angular/core';
import { CardData } from './card/carddata.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  cardDataMain:CardData[]=[
    new CardData("hello1 service","qwsssssssssssssssssssssssssssssssssssser","weqw","dwdqw","dqwd"),
    new CardData("hello2 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello3 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello4 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello5 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello6 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello7","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello8 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello9 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello10 service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello11 service","qwer","weqw","dwdqw","dqwd")
  ];
  cardData:CardData[]=[];
  ngOnInit(): void {
  }
  constructor() { 
    this.cardData=this.cardDataMain;
  }
  

  onsearch(searcheddata:any){
      
      // console.log(this.cardDataMain[1].serviceName);
      var n=this.cardDataMain.length;
      this.cardData=[];
      for (let i = 0; i < n; i++) {
          if(this.cardDataMain[i].serviceName===searcheddata.serviceName){this.cardData.push(this.cardDataMain[i]);}
      }
  }

}
