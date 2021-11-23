import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit, OnChanges {
  @Input() public collection!: Order[];
  @Input() public headers!: string[]
  constructor() { 
    console.log('Constructor:')
    console.log(this.headers)
    console.log(this.collection)
  }

  ngOnInit(): void {
    console.log('On Init')
    console.log(this.headers)
    console.log(this.collection)
  }
  
  ngOnChanges(): void {
    console.log('On changes')
    console.log(this.headers)
    console.log(this.collection)
  }

}
