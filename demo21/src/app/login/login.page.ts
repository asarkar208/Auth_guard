import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
Username: string='';
Password: string='';
  constructor(private Router: Router) { }
login() {
  if (this.Username === 'admin' && this.Password === 'password') {
    this.Router.navigate(['/home']);
  } else {
    alert('invalid');
  }
}
  ngOnInit() {
  }

}
