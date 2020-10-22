import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  login(){

    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      console.log('Failed to login');
    });
    // console.log(this.model);
  }

  // tslint:disable-next-line: typedef
  loggedIn(){
    const token = localStorage.getItem('token');
    // '!!' isa short cut method for simple true or false statements.
    // returns true if this token variable contains a token and returns false if it is empty
    return !!token;
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
