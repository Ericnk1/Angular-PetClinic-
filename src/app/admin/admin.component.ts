import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

}
