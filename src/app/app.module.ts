import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module'
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import {NavbarComponent} from './navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http'; 
import { CardComponent } from './card/card.component';
import { AddcardComponent } from './addcard/addcard.component';
import { CardService } from './card.service';
const appRoutes: Routes = [
  { path: 'add/:id', component: AddcardComponent,data: {animation: 'add'}  },
  { path: 'add', component: AddcardComponent,data: {animation: 'add'}   },
  {
    path: '',
    component: HomeComponent,
   data: {animation: 'home'}  
  }
];
@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavbarComponent, CardComponent, AddcardComponent
   
  ],
  imports: [
    BrowserModule,MaterialModule,FormsModule,HttpClientModule,BrowserAnimationsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
