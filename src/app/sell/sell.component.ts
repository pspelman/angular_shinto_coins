import { Component, OnInit } from '@angular/core';
import { CoinExchangeService } from "../coin-exchange.service";
import {Subscriber} from "rxjs/Subscriber";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  //subscription for exchange rate
  exchange_rate_subscription: Subscription;
  currentExchangeRate: number;

  constructor(private _coinExchangeService: CoinExchangeService ) { }


  exchangeRateMonitor = new Observable<any>((observer: Subscriber<any>) => {
    this.currentExchangeRate = this._coinExchangeService.getCurrentExchangeRate()
  })
  ngOnInit() {
    this.currentExchangeRate = this._coinExchangeService.getCurrentExchangeRate();

  }

  sellCoins(coins: number = 1){
    this.exchange_rate_subscription = this._coinExchangeService.exchangeRateChanged.subscribe(
      (rate: number) => {
        this.currentExchangeRate = rate;
      }
    );
    console.log(`trying to sell a coin`,);
    this._coinExchangeService.sellCoins(coins);
    }

}
