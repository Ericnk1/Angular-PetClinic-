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
import { PetTypeComponent } from './pet-type/pet-type.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { VetComponent } from './vet/vet.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppointmentComponent,
    OwnerComponent,
    PetComponent,
    PetTypeComponent,
    ConsultantComponent,
    VetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
