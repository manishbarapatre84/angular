import { ExpensesComponent } from './components/expenses/expenses.component';
import { ItemsComponent } from './components/items/items.component';
import { PartyComponent } from './components/party/party.component';
import { SitesComponent } from './components/sites/sites.component';
import { PartnerComponent } from './components/partner/partner.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'app-sites', component: SitesComponent },
  { path: 'app-party', component: PartyComponent },
  { path: 'app-partner', component: PartnerComponent},
  { path: 'app-items', component: ItemsComponent},
  { path: 'app-expenses', component: ExpensesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
