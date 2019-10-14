import { Component } from '@angular/core';
import { User } from './user';

import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf-Binding-Data-to-Model';
  topics=['Angular', 'React', 'Vue'];

  submitted=false;

  topicHasError=true;

  errorMsg='';

  userModel= new User('','bob@test.com',4567891029,'default','evening', false);

  constructor(private _enrollmentService: EnrollmentService){

  }

  validationTopic(value){
    if(value=='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(userForm){
    console.log(userForm);
    this.submitted=true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=> console.log('Success!',data),
      error=> this.errorMsg= error.statusText
    );

  }

}
