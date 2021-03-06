import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeActionsComponent } from './employee-actions/employee-actions.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask/src/currency-mask.module';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeActionsComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeModule { }
