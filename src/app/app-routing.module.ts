import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { GameMenuuComponent } from './game-menuu/game-menuu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ControlComponent } from './control/control.component';

const routes: Routes = [{path:"menu",component:MainMenuComponent},{path:"",component:MainMenuComponent},
{path:"board",component:BoardComponent},
{path:"gameMenu",component:GameMenuuComponent},
{path:"control",component:ControlComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
