import { Component, OnInit } from '@angular/core';
import {CoinExchangeService} from "../coin-exchange.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  //subscription for exchange rate
  exchange_rate_subscription: Subscription;
  currentExchangeRate: number;

  constructor(private _coinExchangeService: CoinExchangeService) { }

  ngOnInit() {
    this.currentExchangeRate = this._coinExchangeService.getCurrentExchangeRate();
    this.exchange_rate_subscription = this._coinExchangeService.exchangeRateChanged.subscribe(
      (rate: number) => {
        this.currentExchangeRate = rate;
      }
    );
  }

  buyCoins(coins: number = 1){

    console.log(`trying to sell a coin`,);
    this._coinExchangeService.buyCoins(coins);
    //  fixme: needs to add to the ledger
  }

}
