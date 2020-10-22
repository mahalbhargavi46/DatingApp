import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { error } from 'protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valueFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register(){
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration Successful');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  cancel(){
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}
