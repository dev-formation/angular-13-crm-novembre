import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$ !: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { 
    console.log('service orders instanced');
    
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }
}
