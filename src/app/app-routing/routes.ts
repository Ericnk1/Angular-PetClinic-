import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {AppointmentComponent} from '../appointment/appointment.component';
import {PriceComponent} from '../price/price.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path: 'appointment', component: AppointmentComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
