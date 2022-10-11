import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currency_converter';
  valor1: number = 0;
  valor2: number = 0;
  coin1: string = 'USD';
  coin2: string = 'BRL';

  currencyLabels: string[] = []; //serve para pegar a lista de moedas
  constructor(private currencyService: CurrencyService) {}
  ngOnInit() {
    console.log('vai funcionar');
    this.getCurrency('BRL');
  }
  getCurrency(currency: string) {
    this.currencyService.get(currency).subscribe({
      next: (res) => {
        console.log(res.rates);
        for (let name in res.rates) {
          this.currencyLabels.push(name);
        }
        console.log(this.currencyLabels);
      },
    });
  }
  exchangeRate() {
    this.currencyService.get(this.coin1).subscribe({
      next: (res) => {
        console.log(res.rates);
        this.valor2 = parseFloat((this.valor1 * res.rates[this.coin2]).toFixed(2))
      },
    });
  }
}
