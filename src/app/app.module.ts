import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { FormulairesComponent } from './formulaires/formulaires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './application/navbar/navbar.component';
import { HomeComponent } from './application/home/home.component';
import { ErrorComponent } from './application/error/error.component';
import { FooterComponent } from './application/footer/footer.component';
import { TutorialsComponent } from './application/tutorials/tutorials.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { CreateComponent } from './application/crud/create/create.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    FormulairesComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    TutorialsComponent,
    FunComponent,
    ContactComponent,
    ReadComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //template
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
