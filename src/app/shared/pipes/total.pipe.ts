import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  // transform(val: number, coef: number, tva?: number): number {
  //   if(tva) {
  //     return val * coef * (1 + tva / 100);
  //   }
  //    return val * coef;
  // }
  transform(val: any, tva?: boolean): number {
    if(tva) {
      return val.totalTTC();
    }
     return val.totalHT();
  }
}
