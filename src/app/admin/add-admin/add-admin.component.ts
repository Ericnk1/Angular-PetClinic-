import {Component, OnInit, ViewChild} from '@angular/core';
import {Admin} from '../../shared/models/admin';
import {MatSort} from '@angular/material/sort';
import {AdminService} from '../../shared/services/admin.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  admin: Admin;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: AdminService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
    this.admin = {} as Admin;
  }

  addAdminGroup: FormGroup;

  ngOnInit(): void {
    this.addAdminGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    });
  }

  /*addAdmin(): void {
    const addAdmin = new Admin(null, this.addAdminGroup.get('firstName').value,
      this.addAdminGroup.get('lastName').value, this.addAdminGroup.get('password').value, this.addAdminGroup.get('email').value, null);
    console.log(addAdmin);
    this.adminService.addAdmin(addAdmin).subscribe(value => window.location.assign('/admin-list'));
  }*/

  addAdmin(admin: Admin): void {
    admin.id = null;
    this.admin = this.addAdminGroup.value;
    console.log(admin);
    this.adminService.addAdmin(admin).subscribe(value => window.location.assign('/admin-list'));
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
