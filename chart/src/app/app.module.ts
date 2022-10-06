import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
 
 


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
