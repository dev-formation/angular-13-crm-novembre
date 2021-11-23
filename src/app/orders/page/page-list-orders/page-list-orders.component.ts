import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public myTitle = {name: 'Liste Orders'};
  public collection!: Order[];
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'State'];
    
    this.ordersService.collection$.subscribe(data => this.collection = data);
    

    // this.ordersService.collection$.subscribe(
    //   {
    //     next : (v)=> {console.log(v)},
    //     error : (e)=> {console.error(e)},
    //     complete : ()=> {console.info('complete')}
    //   }
    // );

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

  changeTitle(): void {
    this.myTitle = {name: "My Super List Orders"};
  }

}
