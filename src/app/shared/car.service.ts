import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  formData: Car;

  constructor(private firestore:AngularFirestore) { }

  getCars(){
    return this.firestore.collection('cars').snapshotChanges()
  }
}
