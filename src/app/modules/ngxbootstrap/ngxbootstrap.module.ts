import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule
  ],
  exports: [AccordionModule,BsDatepickerModule,AlertModule]
})
export class NgxBootstrapModule { }