import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';

// NgModule decorator gives the metadata for the module to the compiler
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //What to bootstrap when the app starts
})
//! The application needs at least ONE module to run, this is why Angular CLI created this module for us.
export class AppModule { } // Root module
