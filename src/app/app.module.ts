import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BannerAdComponent } from './banner.component';
import { InnerFeedsComponent } from './banner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, BannerAdComponent, InnerFeedsComponent ],
  entryComponents: [ InnerFeedsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
