import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgageDetailsComponent } from './mortgage-details/mortgage-details.component';

const routes: Routes = [{
  path: '',
  component: MortgageDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageRoutingModule { }
