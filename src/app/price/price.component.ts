import { Component, OnInit } from '@angular/core';
import {Service} from '../shared/models/service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  displayedColumns: string[] = ['description', 'price'];
  Service: Service[] = [
    {description: 'Vet visit', price: 20},
    {description: 'Nail cutting', price: 10},
    {description: 'Ear cleaning', price: 15},
    {description: 'Ordinary PIT tag', price: 8},
    {description: 'Small PIT tag', price: 9.99},
    {description: 'EU pet passport with filling in', price: 10},
    {description: 'National pet passport', price: 8},
    {description: 'Pet registration fee', price: 10},
    {description: 'X-ray image', price: 25},
    {description: 'Endoscopy', price: 57},
    {description: 'Blood examination', price: 14},
    {description: 'Ultrasound diagnostics', price: 30},
    {description: 'Euthanizing', price: 20},
    {description: 'Wound cleaning', price: 40},
    {description: 'Wound stitching', price: 50},
    {description: 'Blood transfusion', price: 140},
    {description: 'Surgery', price: 150},
    {description: 'Ultrasound diagnostics', price: 40},
    {description: 'Castration of a male cat', price: 100},
    {description: 'Sterilization of a female cat', price: 140},
    {description: 'Castration of a male dog (up to 10 kg)', price: 190},
    {description: 'Castration of a male dog (10 - 20 kg)', price: 205},
    {description: 'Castration of a male dog (20 - 40 kg)', price: 220},
    {description: 'Castration of a male dog (over 40 kg)', price: 250},
    {description: 'Female dog sterilization (up to 10 kg)', price: 250},
    {description: 'Female dog sterilization (10 to 20 kg)', price: 270},
    {description: 'Female dog sterilization (20 to 40 kg)', price: 290},
    {description: 'Female dog sterilization (over 40 kg)', price: 320},
    {description: 'Cesarean section, up to 20kg', price: 300},
    {description: 'Cesarean section, 20-40kg', price: 350},
    {description: 'Cesarean section, 40kg+', price: 550},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
