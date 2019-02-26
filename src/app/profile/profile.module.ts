import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { BillingComponent } from './billing/billing.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [ContactComponent, BillingComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
