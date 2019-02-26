import { ArenaStageComponent } from './arena/stage/stage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerListComponent } from './player/list/list.component';
import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'arena', component: ArenaStageComponent },
  { path: 'player', component: PlayerListComponent },
  { path: 'player', component: PlayerListComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
