import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { getLocalRefs } from '@angular/core/src/render3/discovery_utils';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'Inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})



export class InventoryComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {}
}
