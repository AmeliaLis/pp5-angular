import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';



@NgModule({
  exports: [
    CustomerFormComponent
  ],
  declarations: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
