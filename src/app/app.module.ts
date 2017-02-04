import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DataDriven} from './datadriven.component';

import {MyCustomHttpService} from "./MyCustomHttpService.service"

@NgModule({
  declarations: [
    AppComponent,
    DataDriven
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MyCustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
