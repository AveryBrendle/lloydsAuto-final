import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component'
import { MainComponent } from './main/main.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CarComponent } from './cars/car/car.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-main', pathMatch: 'full'},
  { path: 'app-main', component: MainComponent},
  { path: 'Inventory', component: InventoryComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'loginCars', component: CarsComponent },
  // { path: 'homePage', component: HomepageComponent },
  // { path: 'aboutme', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
