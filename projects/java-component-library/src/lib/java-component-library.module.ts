import {NgModule} from '@angular/core';
import {JavaComponentLibraryComponent} from './java-component-library.component';
import {CommonModule} from '@angular/common';
import { UserpageComponent } from './userpage/userpage.component';
import { StockpageComponent } from './stockpage/stockpage.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JavaComponentLibraryComponent,
    UserpageComponent,
    StockpageComponent
  ],
  exports: [
    JavaComponentLibraryComponent
  ]
})
export class JavaComponentLibraryModule { }
