import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultValue= "basic";
  submitted = false;

  user = {
    email:'',
    subscription:'',
    password:''

  };


onFormSubmit(){
  this.submitted = true;
  console.log(this.submitted);
  this.user.email = this.form.value.email;
  this.user.subscription= this.form.value.select;
  this.user.password = this.form.value.password;
  this.form.reset();
  this.form.form.patchValue({select:'basic'});


}


}
