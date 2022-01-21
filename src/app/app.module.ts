import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JeuComponent } from './jeu/jeu.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
 
  declarations: [
    AppComponent,
    JeuComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
