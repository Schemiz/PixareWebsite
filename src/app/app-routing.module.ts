import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuctionComponent } from './auction/auction.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: 'auction', component:AuctionComponent},
  {path: 'cart', component:CartComponent},
  
  {path: 'checkout', component:CheckoutComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'favorites', component:FavoritesComponent},
  {path: '', component:LandingComponent},
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
