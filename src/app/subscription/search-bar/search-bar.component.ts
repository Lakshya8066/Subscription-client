import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CardData } from '../card/carddata.model';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  serviceName?: string;
  purchaseDate?:string;
  expiryDate?: string;
  category?: string;
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const cData={
      serviceName: this.serviceName,
      purchaseDate: this.purchaseDate,
      expiryDate: this.expiryDate,
      category: this.category
    }
    this.emitData.emit(cData);
  }
}
