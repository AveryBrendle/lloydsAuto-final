import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
