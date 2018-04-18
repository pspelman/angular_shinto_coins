import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//need to import all of the components
import {HomeComponent} from "./home/home.component";
import {MineComponent} from "./mine/mine.component";
import {BuyComponent} from "./buy/buy.component";
import {SellComponent} from "./sell/sell.component";
import {LedgerComponent} from "./ledger/ledger.component";

// import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mine', component: MineComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'sell', component: SellComponent},
  {path: 'ledger', component: LedgerComponent},
  // {path: '/ledger', pathMatch: 'full', redirectTo:'ledger'},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  // {path: '/home', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', component: HomeComponent},

  // {path: 'seattle', component: SeattleComponent},
  // {path: 'sanjose', component: SanjoseComponent},
  // {path: 'dojo/:id', component: DojoComponent},
  // {path: '', pathMatch: 'full', redirectTo: '/'},
  // {path: '', pathMatch: 'full', redirectTo: 'seattle'},
  // {path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
