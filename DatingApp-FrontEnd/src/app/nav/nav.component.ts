import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private altertify: AlertifyService, private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  login(){

    this.authService.login(this.model).subscribe(next => {
      this.altertify.success('Logged in Successfully');
      // console.log('logged in successfully');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.altertify.error(error);
      // console.log(error);
    }, () => {
      // when the user is logged in he is redirected to the matches page
      this.router.navigate(['./members']);
    });
    // console.log(this.model);
  }

  // tslint:disable-next-line: typedef
  loggedIn(){
    // const token = localStorage.getItem('token');
    // // '!!' is a short cut method for simple true or false statements.
    // // returns true if this token variable contains a token and returns false if it is empty
    // return !!token;
    // the above method and the below method is same but in this case our token is being checked for casualties.
    return this.authService.loggedIn();
  }
  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
    this.altertify.message('Logged out Successfully');
    this.router.navigate(['./home']);
    // console.log('logged out');
  }

}
