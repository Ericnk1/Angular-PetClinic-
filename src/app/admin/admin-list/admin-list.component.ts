import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Admin} from '../../shared/models/admin';
import {AdminService} from '../../shared/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  displayedColumnsActiveAdmin: string[] = ['id', 'firstName', 'lastName', 'email', 'button'];
  dataSourceActiveAdmin = null;

  displayedColumnsAdminAll: string[] = ['id', 'firstName', 'lastName', 'email', 'button'];
  dataSourceAdminAll = null;

  admins: Admin[];
  admin: Admin;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: AdminService,
              private location: Location, private router: Router) { }

  ngOnInit(): void {

    this.adminService.getActiveAdmin().subscribe(value => {
      this.admins = value;
      console.log(value);
      this.dataSourceActiveAdmin = new MatTableDataSource(this.admins);
      this.dataSourceActiveAdmin.sort = this.sort;
    });
    this.adminService.getAllAdmins().subscribe(value => {
      this.admins = value;
      console.log(value);
      this.dataSourceAdminAll = new MatTableDataSource(this.admins);
      this.dataSourceAdminAll.sort = this.sort;
    });
  }

  deleteAdmin(id: number): void {
    this.adminService.deleteAdminById(id).subscribe(value => window.location.assign('/admin-list'));
  }
  fullyDeleteAdmin(id: number): void {
    this.adminService.fullyDeleteAdminById(id).subscribe(value => window.location.assign('/admin-list'));
  }
  restoreAdmin(id: number): void {
    this.adminService.restoreAdmin(id).subscribe(value => window.location.assign('/admin-list'));
  }
  updateAdmin(admin: Admin): void {
    this.router.navigate(['/update-admin', admin.id]);
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
