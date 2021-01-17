import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {AppointmentComponent} from '../appointment/appointment.component';
import {PriceComponent} from '../price/price.component';
import {AdminComponent} from '../admin/admin.component';
import {AddVetComponent} from '../add-vet/add-vet.component';
import {AddPetComponent} from '../add-pet/add-pet.component';
import {AddOwnerComponent} from '../add-owner/add-owner.component';
import {AddPetTypeComponent} from '../add-pet-type/add-pet-type.component';
import {ServicesComponent} from '../services/services.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path: 'appointment', component: AppointmentComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add-vet', component: AddVetComponent},
  {path: 'add-pet', component: AddPetComponent},
  {path: 'add-owner', component: AddOwnerComponent},
  {path: 'add-petType', component: AddPetTypeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
