import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { AuctionComponent } from './auction/auction.component';

const appRoute: Routes = [
  {path: '', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    LandingComponent,
    CartComponent,
    AuctionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
