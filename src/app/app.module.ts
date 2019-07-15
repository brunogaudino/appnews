import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from "@angular/forms";

import { HackerNewsComponent } from './app.component';
import { HackerNewsService } from './app.service';

@NgModule({
  declarations: [
    HackerNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HackerNewsService],
  bootstrap: [HackerNewsComponent]
})
export class AppModule { }
