import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public item$!: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { 
      this.activatedRoute.paramMap.subscribe(
        (params) => {
          const id = Number(params.get('id'));
          this.item$ = this.ordersService.getById(id);
        });

    }

  ngOnInit(): void {
  }

  action(orderToUpdate: Order) {
    this.ordersService.update(orderToUpdate).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }

}
