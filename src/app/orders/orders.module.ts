import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './page/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './page/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page/page-edit-order/page-edit-order.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
