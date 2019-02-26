import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ArenaStageComponent } from './stage/stage.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ArenaStageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArenaModule { }
