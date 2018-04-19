import {Injectable, OnInit} from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";



@Injectable()
export class Transaction {
  timestamp: any;
  id: any;
  user: any;
  coins: number;
  dollar_val: number;
  timestamp_string: any;
  transaction_type: any;

  constructor(coins:number, transaction_type:any, exchangeRate:number){
    this.user="Shinja";
    this.id = Math.random();
    this.timestamp = new Date();
    this.timestamp_string = `${this.timestamp.toLocaleTimeString()} [${this.timestamp.toLocaleDateString()}`;
    this.coins = coins;
    this.transaction_type = transaction_type;
    this.dollar_val = this.convert_value(Math.abs(coins), exchangeRate);
  }

  convert_value(coins: any, exchangeRate: any){
    console.log(`calculating value of coin`, coins * exchangeRate);
    return (coins * exchangeRate);
  }
}


@Injectable()
export class CoinExchangeService {
  constructor(private _http: HttpClient) {}
  coinsChanged = new Subject<number>();
  exchangeRateChanged = new Subject<number>();
  // exchangeRate = new Subject<number>();

  myCoins: number = 0;
  currentExchangeRate: number = 1;

  // transactions: Array<Transaction>;
  ledger: Array<Transaction> = [];
  ledger_dict: Object = {};
  all_transactions: any;
  user_coins: number;
  one_transaction = new Transaction(1, 'sample', this.getExchangeRate());


  private getExchangeRate(){
    return this.currentExchangeRate;
  }

  addTransactionToLedger(number_of_coins: number, transaction_type: string){
    console.log(`coinEx - Creating transaction..`,);
    let tempTransaction = new Transaction(number_of_coins, transaction_type, this.getExchangeRate());
    console.log(`New transaction for ledger:`,tempTransaction);
    this.ledger.push(tempTransaction);
    let transaction_number = this.ledger.length;
    let tempID = tempTransaction.id;
    this.ledger_dict[tempID] = {
      'transaction_number': transaction_number,
      'details': tempTransaction,
    };
    console.log(`new ledger:`,this.ledger);
  }


  //This will update the Observable object myCoins to show the users' current coins
  addCoin(coins: number) {
    //modify the current user's coins by the number they just got
    this.myCoins += coins;
    this.coinsChanged.next(this.myCoins);
  }

  //This will update the Observable object currentExchangeRate to show the current value of a coin
  modifyExchangeRate(rateChange: number) {
    this.currentExchangeRate += rateChange;
    this.exchangeRateChanged.next(this.currentExchangeRate);
  }

  mineOneCoin(coins_to_add: number = 1): void{
    console.log(`mining a coin`,);
    this.addCoin(coins_to_add);
    this.addTransactionToLedger(coins_to_add, 'mined');
    this.modifyExchangeRate(1);
  }



  getCoins() {
    return this.myCoins;
  }


  buyCoins(coins: number){
    this.addCoin(coins);
    this.modifyExchangeRate( 1);
    this.addTransactionToLedger(coins, 'buy');
  }

  sellCoins(coins_to_sell: number = 1) {

    if (this.myCoins < 1){
      alert("You don't have enough to make a sale");
      return;
    }
    console.log(`trying to sell coins: `,coins_to_sell);

    //subtract number of coins sold from the user's coins
    this.addCoin(-coins_to_sell);
    this.addTransactionToLedger(-coins_to_sell, 'sold');
    this.modifyExchangeRate(-1);
  }

  getCurrentCoinCount() {
    //TODO: get all transactions by this user
    //TODO: add all the coins from all transactions by this user
      //could recursively go through all transactions and add up the coins where the user == current user
    return this.user_coins;
  }

  getCoinsForUser(user: String, total: number = 0) {
    //TODO: Make recursive function to go through all transactions

  }

  //things that the service will do should go in here
  showAllCoins(){
    // this.all_transactions = [1, 2, 3, 4];
    this.all_transactions = [this.one_transaction];
    return this.all_transactions
  }


  getCurrentExchangeRate() {
    return this.currentExchangeRate;
  }
}
