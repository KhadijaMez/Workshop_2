import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    NotFoundComponent,
    ApartmentsComponent,
    AddApartmentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
