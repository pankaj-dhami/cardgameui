import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardDisplayComponent } from 'src/Directive/card-display/card-display.component';
import { CardApiServiceService } from 'src/Service/card-api-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CardApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
