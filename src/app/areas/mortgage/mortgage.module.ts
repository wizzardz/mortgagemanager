import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageDetailsComponent } from './mortgage-details/mortgage-details.component';
import { PrepaymentComponent } from './prepayment/prepayment.component';

@NgModule({
  imports: [
    CommonModule,
    MortgageRoutingModule
  ],
  declarations: [MortgageDetailsComponent, PrepaymentComponent]
})
export class MortgageModule { }
