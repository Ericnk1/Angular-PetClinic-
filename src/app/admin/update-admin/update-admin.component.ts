import { Component, OnInit } from '@angular/core';
import {Admin} from '../../shared/models/admin';
import {AdminService} from '../../shared/services/admin.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  admin: Admin;

  constructor(private adminService: AdminService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
    this.admin = {} as Admin;
  }

  updateAdminGroup: FormGroup;

  ngOnInit(): void {
    this.admin.id = this.route.snapshot.params.id;
    this.adminService.getAdminById(this.admin.id).subscribe(value =>
    {
      this.admin = value;
      this.updateAdminGroup.setValue(this.admin);
    });
    console.log(this.admin);
    this.updateAdminGroup = this.formBuilder.group({
      id: new FormControl(this.admin.id, Validators.required),
      firstName: new FormControl(this.admin.firstName, Validators.required),
      lastName: new FormControl(this.admin.lastName, Validators.required),
      email: new FormControl(this.admin.email, Validators.required)
    });
  }

  unSubmit(admin: Admin): void {
    this.admin = this.updateAdminGroup.value;
    console.log(admin);
    this.adminService.updateAdmin(admin.id, admin).subscribe(value => window.location.assign('/admin-list'));
  }

  goBack(): void {
    this.router.navigate(['/admin-list']);
  }

}
