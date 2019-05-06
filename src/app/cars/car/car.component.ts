import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/shared/car.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(private service : CarService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      make: '',
      model: '',
      price: '',
      miles: ''
    }
  }

  onSubmit(form : NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id==null)
      this.firestore.collection('cars').add(data);
    else
    this.firestore.doc('cars/'+ form.value.id).update(data);
      this.resetForm(form);
    this.toastr.success('Submitted Successfully','CAR. Register');
  }

}
