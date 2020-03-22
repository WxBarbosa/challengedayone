import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapModule } from './modules/ngxbootstrap/ngxbootstrap.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BottomComponent } from './shared/bottom/bottom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoronaComponent } from './components/corona/corona.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BottomComponent,
    AppComponent,
    CoronaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapModule,
    FontAwesomeModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }