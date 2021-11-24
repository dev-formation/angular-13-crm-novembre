import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public item  = new Order()
  constructor(
    private ordersService: OrdersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  action(newOrder: Order) {
    this.ordersService.add(newOrder).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }

}
