import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public numVersion = new BehaviorSubject(1);

  constructor() { }

  public incrementVersion(): void {
    this.numVersion.next(this.numVersion.value + 1);
    console.log(this.numVersion.value);
  }
}
