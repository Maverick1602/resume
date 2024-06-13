import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MymoduleModule } from './mymodule.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MymoduleModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
