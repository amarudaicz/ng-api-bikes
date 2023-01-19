import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ListBikesComponent } from './list-bikes/list-bikes.component';
import { BikeSelectedComponent } from './bike-selected/bike-selected.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ListBikesComponent,
    BikeSelectedComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ListBikesComponent, HeaderComponent]
})


export class AppModule {



}
