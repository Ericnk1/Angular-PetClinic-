import { Component, OnInit } from '@angular/core';
import {VetService} from '../../shared/services/vet.service';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Vet} from '../../shared/models/vet';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-vet',
  templateUrl: './update-vet.component.html',
  styleUrls: ['./update-vet.component.css']
})
export class UpdateVetComponent implements OnInit {

  vet: Vet;

  constructor(private vetService: VetService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
    this.vet = {} as Vet;
  }

  updateVetGroup: FormGroup;

  ngOnInit(): void {
    this.vet.id = this.route.snapshot.params.id;
    this.vetService.getVetById(this.vet.id).subscribe(value => {
      this.vet = value
      this.updateVetGroup.setValue(this.vet);
    });
    console.log(this.vet);
    this.updateVetGroup = this.formBuilder.group({
      id: new FormControl(this.vet.id, Validators.required),
      firstName: new FormControl(this.vet.firstName, Validators.required),
      lastName: new FormControl(this.vet.lastName, Validators.required),
      email: new FormControl(this.vet.email, Validators.required)
    });
  }

  unSubmit(vet: Vet): void {
    this.vet = this.updateVetGroup.value;
    console.log(vet);
    this.vetService.updateVet(vet.id, vet).subscribe(value => window.location.assign('/vet-list'));
  }

  goBack(): void {
    this.router.navigate(['/vet-list']);
  }

}
