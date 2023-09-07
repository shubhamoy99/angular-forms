import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val = {
    email:'abc@gmail.com',
    password:'123'
  }

  constructor() { }

  ngOnInit() { }

  login(loginForm: NgForm, submit) {
    console.log(loginForm.value, loginForm.valid, submit)
    console.log(this.val);
  }

  onEmailChange(change){
    console.log(change)
  }

}
