import {NgModule} from '@angular/core';
import {JavaComponentLibraryComponent} from './java-component-library.component';
import {CommonModule} from '@angular/common';
import {UserpageComponent} from './userpage/userpage.component';
import {StockpageComponent} from './stockpage/stockpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'main',  component: MainpageComponent},
  { path: 'users',  component: UserpageComponent },
  { path: 'stock',  component: StockpageComponent }
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
    MainpageComponent
  ],
  exports: [
    JavaComponentLibraryComponent
  ]
})
export class JavaComponentLibraryModule { }
