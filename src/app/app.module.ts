import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { OwnerComponent } from './owner/owner.component';
import { PetComponent } from './pet/pet.component';
import { VetComponent } from './vet/vet.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AppInterceptor} from './shared/interceptor/app.interceptor';
import { AddOwnerComponent } from './owner/add-owner/add-owner.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { AddVetComponent } from './vet/add-vet/add-vet.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import { ServicesComponent } from './services/services.component';
import { UpdatePetComponent } from './pet/update-pet/update-pet.component';
import { UpdateVetComponent } from './vet/update-vet/update-vet.component';
import { UpdateAppointmentComponent } from './appointment/update-appointment/update-appointment.component';
import { UpdateOwnerComponent } from './owner/update-owner/update-owner.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { VetListComponent } from './vet/vet-list/vet-list.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppointmentComponent,
    OwnerComponent,
    PetComponent,
    VetComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PriceComponent,
    ContactComponent,
    AboutComponent,
    AddOwnerComponent,
    AddPetComponent,
    AddVetComponent,
    ServicesComponent,
    UpdatePetComponent,
    UpdateVetComponent,
    UpdateAppointmentComponent,
    UpdateOwnerComponent,
    PetListComponent,
    OwnerListComponent,
    VetListComponent,
    AppointmentListComponent,
    AdminListComponent,
    UpdateAdminComponent,
    AddAdminComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    // MapsAPILoader,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    // RouterModule.forChild(Routes),
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSortModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
