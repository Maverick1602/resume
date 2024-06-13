import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MycomponentComponent} from './mycomponent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MycomponentComponent ],
  bootstrap:    [MycomponentComponent  ],
  exports: [MycomponentComponent]
})
export class MymoduleModule { }