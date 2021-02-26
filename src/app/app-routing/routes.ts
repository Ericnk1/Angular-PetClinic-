import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {AppointmentComponent} from '../appointment/appointment.component';
import {PriceComponent} from '../price/price.component';
import {AdminComponent} from '../admin/admin.component';
import {AddVetComponent} from '../vet/add-vet/add-vet.component';
import {AddPetComponent} from '../pet/add-pet/add-pet.component';
import {AddOwnerComponent} from '../owner/add-owner/add-owner.component';
import {AddPetTypeComponent} from '../pet-type/add-pet-type/add-pet-type.component';
import {ServicesComponent} from '../services/services.component';
import {UpdateOwnerComponent} from '../owner/update-owner/update-owner.component';
import {UpdateAppointmentComponent} from '../appointment/update-appointment/update-appointment.component';
import {UpdatePetComponent} from '../pet/update-pet/update-pet.component';
import {UpdateVetComponent} from '../vet/update-vet/update-vet.component';
import {VetListComponent} from '../vet/vet-list/vet-list.component';
import {PetListComponent} from '../pet/pet-list/pet-list.component';
import {AppointmentListComponent} from '../appointment/appointment-list/appointment-list.component';
import {PetTypeListComponent} from '../pet-type/pet-type-list/pet-type-list.component';
import {OwnerListComponent} from '../owner/owner-list/owner-list.component';
import {UpdatePetTypeComponent} from '../pet-type/update-pet-type/update-pet-type.component';
import {PetComponent} from '../pet/pet.component';
import {OwnerComponent} from '../owner/owner.component';
import {AddAdminComponent} from '../admin/add-admin/add-admin.component';
import {UpdateAdminComponent} from '../admin/update-admin/update-admin.component';
import {AdminListComponent} from '../admin/admin-list/admin-list.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path: 'appointment', component: AppointmentComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add-admin', component: AddAdminComponent},
  {path: 'add-vet', component: AddVetComponent},
  {path: 'add-pet', component: AddPetComponent},
  {path: 'add-owner', component: AddOwnerComponent},
  {path: 'add-petType', component: AddPetTypeComponent},
  {path: 'update-admin/:id', component: UpdateAdminComponent},
  {path: 'update-owner/:id', component: UpdateOwnerComponent},
  {path: 'update-appointment/:id', component: UpdateAppointmentComponent},
  {path: 'update-pet/:id', component: UpdatePetComponent},
  {path: 'update-vet/:id', component: UpdateVetComponent},
  {path: 'update-petType/:id', component: UpdatePetTypeComponent},
  {path: 'pet/:id', component: PetComponent},
  {path: 'owner/:id', component: OwnerComponent},
  {path: 'admin-list', component: AdminListComponent},
  {path: 'vet-list', component: VetListComponent},
  {path: 'pet-list', component: PetListComponent},
  {path: 'appointment-list', component: AppointmentListComponent},
  {path: 'petType-list', component: PetTypeListComponent},
  {path: 'owner-list', component: OwnerListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
