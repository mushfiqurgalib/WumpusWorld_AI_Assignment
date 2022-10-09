import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameMenuuComponent } from './game-menuu/game-menuu.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MainMenuComponent,
    GameMenuuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
