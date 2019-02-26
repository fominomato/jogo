import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { PlayerListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AddComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
