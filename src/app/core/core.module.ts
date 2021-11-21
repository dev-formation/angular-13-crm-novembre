import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports : [
    UiModule,
    IconsModule,
    TemplatesModule,
    LoginModule
  ]
})
export class CoreModule { }
