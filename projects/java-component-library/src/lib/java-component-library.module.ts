import {NgModule} from '@angular/core';
import {JavaComponentLibraryComponent} from './java-component-library.component';
import {CommonModule} from '@angular/common';
import {UserpageComponent} from './userpage/userpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { CartComponent } from './shop/cart/cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ConfirmComponent } from './shop/confirm/confirm.component';
import { NavbarComponent } from './navbar/navbar.component';
import {StockpageComponent} from './stockpage/stockpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: StockpageComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [
    JavaComponentLibraryComponent,
    UserpageComponent,
    MainpageComponent,
    CartComponent,
    StockpageComponent,
    CheckoutComponent,
    ConfirmComponent,
    NavbarComponent
  ],
  exports: [
    JavaComponentLibraryComponent
  ]
})
export class JavaComponentLibraryModule { }
