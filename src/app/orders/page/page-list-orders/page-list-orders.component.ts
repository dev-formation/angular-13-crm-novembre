import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe(
      {
        next : (v)=> {console.log(v)},
        error : (e)=> {console.error(e)},
        complete : ()=> {console.info('complete')}
      }
    );

    // this.ordersService.testObs$.subscribe((data) => {
    //   console.log('Observer 1 : ', data);
    // })

    // this.ordersService.testObs$.subscribe((data) => {
    //   console.log('Observer 2 : ', data);
    // })

    // this.ordersService.subj.subscribe((data) => {
    //   console.log('Subject 1 : ', data);
    // })

    // this.ordersService.subj.subscribe((data) => {
    //   console.log('Subject 2 : ', data);
    // })

    // this.ordersService.sendDataSubject();

    // this.ordersService.behave.subscribe((data) => {
    //   console.log('Behave 1 : ', data);
    // })

    // this.ordersService.behave.subscribe((data) => {
    //   console.log('Behave 2 : ', data);
    // })

    // this.ordersService.sendDataBehaviorSubject();
   }

  ngOnInit(): void {
  }

}
