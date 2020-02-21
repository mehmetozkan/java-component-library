import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {JavaComponentLibraryModule} from '../../../java-component-library/src/lib/java-component-library.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StockpageComponent} from '../../../java-component-library/src/lib/stockpage/stockpage.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JavaComponentLibraryModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
