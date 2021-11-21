import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './page/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './page/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './page/page-edit-client/page-edit-client.component';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
