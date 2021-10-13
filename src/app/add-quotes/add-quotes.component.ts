import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteServiceService } from '../quote-service.service';
@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent implements OnInit {

  quote: Quote={
    id: 0,
    author: '',
    quote:''
  };

  constructor(private qs:QuoteServiceService) { }

  ngOnInit(): void {
  }


addQuote(){
  this.qs.addQutoes(this.quote);
}


}
