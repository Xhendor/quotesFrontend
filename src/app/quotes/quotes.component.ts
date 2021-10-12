import { Component, OnInit } from '@angular/core';
import { QuoteServiceService } from '../quote-service.service';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  items = ['First', 'Second', 'Third'];

  quoteArray:Quote[]=[];

  constructor(private quotesService:QuoteServiceService) { }

  ngOnInit(): void {

    //this.quotesService.getQuotes().subscribe(quotes => this.quoteArray=quotes);
      this.getQuotes();

  }

  getQuotes(){

    this.quotesService.getQuotes().subscribe(quotes => this.quoteArray=quotes);

  }


}
