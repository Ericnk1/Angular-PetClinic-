import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  google: any;
  lat = 59.436962;
  lng = 24.753574;
  constructor() { }

  ngOnInit(): void {
  }

}
