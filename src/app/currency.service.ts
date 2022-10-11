import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Currency from './models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  get(currency: string){
    return this.http.get("https://open.er-api.com/v6/latest/"+ currency) as Observable<Currency>
  }
}
