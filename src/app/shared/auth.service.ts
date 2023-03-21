import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
// import { Details } from '../interface/this';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router: Router ,  private fs: Firestore) {}
  //login
  login(email : string, password : string)
  {
     this.fireauth.signInWithEmailAndPassword(email,password).then( () =>
  {
localStorage.setItem('token','true')
this.router.navigate(['/services']) 
}, err => {
    alert('You Need to Create an Account')
    this.router.navigate(['/login'])
     })
  }

  //signup
  
  register(email : string, password : string)
  {
     this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
     alert('registration succesfully')
      this.router.navigate(['/login']) 
}, err => {
    alert('err.message')
    this.router.navigate(['/signup'])
     })
  }
}
