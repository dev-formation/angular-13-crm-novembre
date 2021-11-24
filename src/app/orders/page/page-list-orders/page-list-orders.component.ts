import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  public myTitle = {name: 'Liste Orders'};
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers: string[];
  private count: number = 0;
  private count2: number = 0;

  constructor(private ordersService: OrdersService) {
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'State'];
    
    // this.ordersService.collection$.subscribe(data => this.collection = data);
    this.collection$ = this.ordersService.collection$
    
    // this.ordersService.behave$.subscribe(data => console.log('******** behave :', data));
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

  ngOnChanges(): void {
    console.log('----OnChange');
    
    
  }

  ngDoCheck(): void {
    console.log('----Do Check');
    this.count++
    console.log(this.count);
  }
  
  ngAfterContentInit(): void {
    console.log('----ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('----ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('----ngAfterViewChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('----ngAfterViewInit');
  }


  changeTitle(): void {
    this.myTitle = {name: "My Super List Orders"};
  }

  // public total( val: number, coef: number, tva?: number): number {
  //   this.count2++
  //   console.log(this.count2);
  //   if(tva) {
  //     return val * coef * (1 + tva / 100);
  //   }
  //   return val * coef;

  // }



  

}
