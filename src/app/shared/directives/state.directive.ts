import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() { }

  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLowerCase()}`
  }

}
