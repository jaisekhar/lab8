import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  title = 'Lab-8';
  user_name: any;
  pass_word: any;
  ngOnInit() {
  }
  constructor(private http: HttpClient, private router: Router) {}
  login() {
    let user = {
      user_name : this.user_name,
      pass_word : this.pass_word
    };
    this.http.post('http://localhost:8888/api/login', user ).subscribe( data => {
      localStorage.setItem('authorization', data.toString());
      this.router.navigate(['/home']);
    });
  }
}
