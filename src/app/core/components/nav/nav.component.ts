import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private versionService: VersionService,
    private ordersService: OrdersService
    ) { }

  ngOnInit(): void {
  }

  public onClickIncrement(): void {
    this.versionService.incrementVersion();
  }

  // public onClickBehave(): void {
  //   this.ordersService.behave$.next(this.ordersService.behave$.value + 1);
  // }

}
