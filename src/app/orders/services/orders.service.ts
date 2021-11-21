import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$ !: Observable<Order[]>;
  private urlApi = environment.urlApi;

  /**
   * Explication Observable froid
   */
  // public testObs$!: Observable<number>;

  /**
   * Explication Observable chaud
   */
  // public subj = new Subject<string|number>();
  // public behave = new BehaviorSubject<string|number>('Init behavior');
  

  constructor(private http: HttpClient) { 
    console.log('service orders instanced');
    
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);

    /**
     * Explication Observable froid
     */
    // this.testObs$ = new Observable((observer) => {
    //   observer.next(Math.random());
    // })
  }

  // public sendDataSubject(): void {
  //   /**
  //    * Explication Observable chaud Subject
  //    */
  //    this.subj.next('Test');
  //    this.subj.next(Math.random());
  //    this.subj.next('Ok Google');
  //    this.subj.next('Yes Papa');
  // }

  // public sendDataBehaviorSubject(): void {
  //   /**
  //    * Explication Observable chaud BehaviorSubject
  //    */
  //    this.behave.next('Test');
  //    this.behave.next(Math.random());
  //    this.behave.next('Ok Google');
  //    this.behave.next('Yes Papa');
  // }
}
