import {NgModule} from '@angular/core';
import {JavaComponentLibraryComponent} from './java-component-library.component';
import {CommonModule} from '@angular/common';
import {UserpageComponent} from './userpage/userpage.component';
import {StockpageComponent} from './stockpage/stockpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { CartComponent } from './shop/cart/cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ConfirmComponent } from './shop/confirm/confirm.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: StockpageComponent },
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
    StockpageComponent,
    MainpageComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmComponent
  ],
  exports: [
    JavaComponentLibraryComponent
  ]
})
export class JavaComponentLibraryModule { }
