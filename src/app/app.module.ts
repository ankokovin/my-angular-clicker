import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameModule } from './game/game.module';

import { MaterialthingsModule } from './materialthings/materialthings.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { GameLoopService } from './game-loop.service';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule,
    MaterialthingsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GameLoopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
