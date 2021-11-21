import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
