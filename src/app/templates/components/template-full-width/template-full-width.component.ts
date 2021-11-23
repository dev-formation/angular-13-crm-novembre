import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit
// , OnChanges, OnDestroy, DoCheck 
{
  @Input() public title: {name: string};

  constructor() { 
    this.title = {name: 'Le titre est ici'};
    // console.info('----Constructeur appelé');
    
  }
  
  ngOnInit(): void {
    // console.info('----NgOnInit appelé');
  }
  
  // ngOnChanges(): void {
  //   console.info('----NgOnChanges appelé');
  // }

  // ngOnDestroy(): void {
  //   console.info('----NgOnDestroy appelé');
  // }
  // ngDoCheck(): void {
  //   console.info('----NgDoCheck appelé');
  // }
}
