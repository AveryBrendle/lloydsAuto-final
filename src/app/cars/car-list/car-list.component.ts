import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/shared/car.service';
import { Car } from 'src/app/shared/car.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  list: Car[];
  constructor(private service: CarService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getCars().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Car; 
      })
    })
  }

  onEdit (car:Car) {
    this.service.formData = Object.assign({},car);
  }

  onDelete(id:string){
    if(confirm("Are You Sure you want to delete this record")) {
      this.firestore.doc('cars/'+ id).delete();
      this.toastr.warning('Deleted Successfully', 'Car. Register')
    }
  }

}
