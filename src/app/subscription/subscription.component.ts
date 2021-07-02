import { Component, OnInit } from '@angular/core';
import { CardData } from './card/carddata.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  cardData:CardData[]=[
    new CardData("hello service","qwsadssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssser","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd"),
    new CardData("hello service","qwer","weqw","dwdqw","dqwd")
  ];
  ngOnInit(): void {
  }
  constructor() { }

}
