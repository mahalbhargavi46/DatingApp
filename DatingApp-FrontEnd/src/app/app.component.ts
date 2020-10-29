import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApplication';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService){

  }
  // tslint:disable-next-line: typedef
  ngOnInit(){
    const token = localStorage.getItem('token');
    if (token) {
      // when the application loads, the authService is gonna have a decoded token that is available in the local storage
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
