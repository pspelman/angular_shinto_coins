import { Component, OnInit } from '@angular/core';
import {CoinExchangeService} from "../coin-exchange.service";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _coinExchangeService: CoinExchangeService) {  }

  current_question: String;
  current_algo_response: any;
  coin_count: Number;


  ngOnInit() {
    this.current_question = "How much wood would wud a Fibonacci be like...wat?";
    this.current_algo_response = "";
  }

  submitAlgorithmAnswer(){
    //TODO: Function that checks answer to algorithm
    console.log(`Algo response (no wrong answers):`,this.current_algo_response);



  }
  //TODO: Function that calls to the coinExchange service and adds ONE to the ledger
  awardOneCoin(): void{
    console.log(`getting a coin`,);
    //send to service, add ONE coin
  //  coins: 1
  //  exchangerate - default
  //  transaction_type = 'earned'
    this._coinExchangeService.mineOneCoin(1);
    this.coin_count = this._coinExchangeService.user_coins;

  }

  // updateCoins(): void{
  //   this.coin_count = this._coinExchangeService.user_coins;
  // }


  //TODO: refresh the number of coins

}
