import { Component, OnInit } from '@angular/core';
import {CoinExchangeService, Transaction} from "../coin-exchange.service";

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private _coinExchangeService: CoinExchangeService) {
  }

  all_transactions: any;
  ledger: Array<Transaction>;
  ledger_dict: Object;

  //todo: Get the ledger
  //todo: build a table from the ledger
  //todo: display the table with a loop through all transactions

  ngOnInit() {
    this.all_transactions = this._coinExchangeService.showAllCoins();
    this.ledger = this._coinExchangeService.ledger;
    this.ledger_dict = this._coinExchangeService.ledger_dict;
    // console.log(`LEDGER DICT:`,this.ledger_dict);
  }
}
