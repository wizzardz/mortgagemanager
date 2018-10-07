import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule,
  MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule
} from '@angular/material';

import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageDetailsComponent } from './mortgage-details/mortgage-details.component';
import { PrepaymentComponent } from './prepayment/prepayment.component';

@NgModule({
  imports: [
    CommonModule,
    MortgageRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonToggleModule
  ],
  declarations: [MortgageDetailsComponent, PrepaymentComponent]
})
export class MortgageModule { }
