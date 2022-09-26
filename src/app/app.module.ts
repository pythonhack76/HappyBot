import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DirettivaUnoDirective } from './direttive/direttiva-uno.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HightlightDirective } from './direttive/hightlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContattoComponent } from './components/contatto/contatto.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DirettivaUnoDirective,
    HightlightDirective,
    AboutComponent,
    ContactComponent,
    ServiziComponent,
    PartnersComponent,
    HomeComponent,
    DashboardComponent,
    ContattoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
