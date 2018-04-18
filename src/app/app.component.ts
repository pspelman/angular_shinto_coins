import {Component, OnInit} from '@angular/core';
import {Subscriber} from "rxjs/Subscriber";
import {Observable} from "rxjs/Observable";
//import the service e.g.:
// import {ApiCallerService} from "./api-caller.service";
import {CoinExchangeService} from "./coin-exchange.service";
import {Transaction} from "./coin-exchange.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //state the subscription, followed by the coins
  subscription: Subscription;
  myCoins: number = this._coinExchangeService.getCoins();


  constructor(private _coinExchangeService: CoinExchangeService) {  }


  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  coin_count: Number;
  title: String;
  coin_monitor = new Observable<any>((observer: Subscriber<any>) => {
    this.coin_count = this._coinExchangeService.getCurrentCoinCount()
  });
  // coin_count = this._coinExchangeService.user_coins;
  transactions: Array<Transaction>;

  shinto_links = [
    {
      'name':'Home',
      'linking_name':'home',
    },
    {
      'name':'Mine Coins',
      'linking_name':'mine',

    },
    {
      'name':'Buy Coins',
      'linking_name':'buy',
    },
    {
      'name':'Sell Coins',
      'linking_name':'sell',
    },
    {
      'name':'Browse Ledger',
      'linking_name':'ledger',
    },
  ];

  ngOnInit() {
    this.subscription = this._coinExchangeService.coinsChanged.subscribe(
      (coins: number) => {
        this.myCoins = coins;
      }
      // this.transactions = this._coinExchangeService.getLedger();
    );

    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.buyCoins(1);
    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.sellCoins(1);
    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.buyCoins(1);
    this._coinExchangeService.buyCoins(1);
    this._coinExchangeService.mineOneCoin(1);
    this._coinExchangeService.sellCoins(1);
    this._coinExchangeService.sellCoins(1);


    //go to service and get the history of stuff
    this.title = 'ShintoBinto';
    // alert(this._coinExchangeService.showAllCoins());
    // this.coin_count = this._coinExchangeService.getCurrentCoinCount();
    this.transactions = this._coinExchangeService.showAllCoins();
    this.coin_monitor.subscribe(data => {
      this.coin_count = data;
    });

    // this._coinExchangeService.getTheCoins().subscribe(value => console.log(``, value));

    console.log(`ALL TRANSACTIONS:`,this.transactions);

  }


  onButtonClick(): void {
    console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
  }
  onButtonClickParams(num: Number, str: String): void {
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void {
    console.log(`Click event is working with event: `, event);
  }

}

