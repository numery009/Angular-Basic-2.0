import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// FormBuilder is service. Which will fullfill the purpose of FormGroup and FormControl
import {FormBuilder, Validators, FormGroup, FormArray} from '@angular/forms'

import { TestBed } from '@angular/core/testing';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'reactive-form';

  registrationForm: FormGroup;

  

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }


  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }
    // The following code is for FormBuilder
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService){}
  
  ngOnInit(){
    this.registrationForm=this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3),forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state:[''],
        zipCode:['']
      }),
      alternateEmails: this.fb.array([])
    }, {validator:PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue=>{
          const email= this.registrationForm.get('email');
          if (checkedValue){
            email.setValidators(Validators.required);
          }else{
            email.clearValidators();
          }
          email.updateValueAndValidity();
      });
  }

    
  
// The following code is for FormGroup and FormControl
  //  registrationForm=new FormGroup({
 //   userName: new FormControl('Numery'),
 //   password: new FormControl(''),
 //   confirmPassword: new FormControl(''),
 //   address: new FormGroup({
 //     city: new FormControl(''),
 //     state: new FormControl(''),
 //    zipCode: new FormControl('')
 //   })
 // });

  loadApiData(){
    this.registrationForm.setValue({
      userName:'Zaber',
      password: 'test',
      confirmPassword:'test',
      address:{
        city: 'City',
        state:'State',
        zipCode: '01854'
      }
    });
  }

  loadFewApiData(){
    this.registrationForm.patchValue({
      userName:'Zaber',
      password: 'test',
      confirmPassword:'test',
      
    });
  }

  onSubmit(){
    console.log (this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Sucess!', response),
        error => console.error('Error!', error)        
      );
  }

}
