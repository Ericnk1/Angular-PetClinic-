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
import {UpdateOwnerComponent} from '../update-owner/update-owner.component';
import {UpdateAppointmentComponent} from '../update-appointment/update-appointment.component';
import {UpdatePetComponent} from '../update-pet/update-pet.component';
import {UpdateVetComponent} from '../update-vet/update-vet.component';
import {VetListComponent} from '../vet-list/vet-list.component';
import {PetListComponent} from '../pet-list/pet-list.component';
import {AppointmentListComponent} from '../appointment-list/appointment-list.component';
import {PetTypeListComponent} from '../pet-type-list/pet-type-list.component';
import {OwnerListComponent} from '../owner-list/owner-list.component';
import {UpdatePetTypeComponent} from '../update-pet-type/update-pet-type.component';

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
  {path: 'update-owner', component: UpdateOwnerComponent},
  {path: 'update-appointment', component: UpdateAppointmentComponent},
  {path: 'update-pet/:id', component: UpdatePetComponent},
  {path: 'update-vet', component: UpdateVetComponent},
  {path: 'update-petType', component: UpdatePetTypeComponent},
  {path: 'vet-list', component: VetListComponent},
  {path: 'pet-list', component: PetListComponent},
  {path: 'appointment-list', component: AppointmentListComponent},
  {path: 'petType-list', component: PetTypeListComponent},
  {path: 'owner-list', component: OwnerListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
