import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalciRoutingModule } from './calci-routing.module';
import { LogicComponent } from './logic/logic.component';


@NgModule({
  declarations: [
    LogicComponent
  ],
  imports: [
    CommonModule,
    CalciRoutingModule,
    FormsModule
  ]
})
export class CalciModule { }
