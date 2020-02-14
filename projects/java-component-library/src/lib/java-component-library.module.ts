import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {JavaComponentLibraryComponent} from './java-component-library.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  declarations: [JavaComponentLibraryComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [JavaComponentLibraryComponent]
})
export class JavaComponentLibraryModule {
}
