
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { SitesComponent } from './components/sites/sites.component';
import { ItemsComponent } from './components/items/items.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PartyComponent } from './components/party/party.component';
import { ExpensesComponent } from './components/expenses/expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SitesComponent,
    PartyComponent,
    PartnerComponent,
    ItemsComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
