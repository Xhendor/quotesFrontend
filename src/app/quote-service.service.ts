import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   private quotesURL="https://secret-sierra-46631.herokuapp.com/quotes";
 // private quotesURL="http://localhost:5000/quotes"
  constructor(
    private http: HttpClient,
    ) { }

  getQuotes():Observable<Quote[]>{

    return this.http.get<Quote[]>(this.quotesURL);

  }
  addQutoes(quote: Quote): Observable<any> {
    return this.http.post(this.quotesURL, quote, this.httpOptions);
  }


}
