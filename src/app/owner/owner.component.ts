import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../shared/models/pet';
import {MatSort} from '@angular/material/sort';
import {PetType} from '../shared/models/petType';
import {Appointment} from '../shared/models/appointment';
import {MatTableDataSource} from '@angular/material/table';
import {PetService} from '../shared/services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from '../shared/models/owner';
import {OwnerService} from '../shared/services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  displayedColumnsAllPet: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType'];
  dataSourceAllPet = null;

  pets: Pet[];
  owner: Owner;
  pet: Pet;
  petType: PetType;
  appointment: Appointment;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private ownerService: OwnerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.owner.id = this.route.snapshot.params.id;
    this.ownerService.getOwnerById(this.owner.id).subscribe(value => {
      this.owner = value;
      console.log(value);
      this.pets = this.owner.pets;
      console.log(this.pets);
      this.dataSourceAllPet = new MatTableDataSource(this.pets);
      this.dataSourceAllPet.sort = this.sort;
    });
  }

  goBack(): void {
    this.router.navigate(['/owner-list']);
  }

}
