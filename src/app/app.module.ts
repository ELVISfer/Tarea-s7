import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
RouterModule.forRoot
@NgModule({
  declarations: [
    AppComponent,
routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
