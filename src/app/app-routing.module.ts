import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';


const routes: Routes = [
  {path: "",redirectTo: "/residence", pathMatch: "full" },

  {path:'home', component: HomeComponent},
  {path:'residences', component: ResidencesComponent},
  {path: 'residences/details/:id', component: ResidenceDetailsComponent },
  { path: "adduser", component: TestComponent },
  {path: 'apartments', component: ApartmentsComponent }, 
  {path: 'add-residence', component: AddResidenceComponent },
  {path: 'add-apartment', component: AddApartmentComponent },
  
  {path: '**', component: NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
