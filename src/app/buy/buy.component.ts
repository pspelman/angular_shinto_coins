import { Component, OnInit } from '@angular/core';
import {CoinExchangeService} from "../coin-exchange.service";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _coinExchangeService: CoinExchangeService) { }
  currentExchangeRate: number;
  ngOnInit() {
    this.currentExchangeRate = this._coinExchangeService.getCurrentExchangeRate();
  }

  buyCoins(coins: number = 1){
    console.log(`trying to sell a coin`,);
    this._coinExchangeService.buyCoins(coins);
    //  fixme: needs to add to the ledger
  }

}
