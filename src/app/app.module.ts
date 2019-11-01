import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppAlertComponent } from './app-alert/app-alert.component';
import { DogService } from './dog.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AppAlertComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DogService]
})
export class AppModule { }
