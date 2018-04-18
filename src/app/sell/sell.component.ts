import { Component, OnInit } from '@angular/core';
import { CoinExchangeService } from "../coin-exchange.service";


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private _coinExchangeService: CoinExchangeService ) { }
  currentExchangeRate: number;

  ngOnInit() {
    this.currentExchangeRate = this._coinExchangeService.getCurrentExchangeRate();

  }

  sellCoins(coins: number = 1){
    console.log(`trying to sell a coin`,);
    this._coinExchangeService.sellCoins(coins);
    }

}
