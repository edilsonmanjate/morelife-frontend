import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import * as toastr from 'toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: any = { 
    "email": "", 
    "password": ""
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {

    this.http.post('https://localhost:7220/api/Auth/login', this.loginObj).subscribe((data: any) => {
      if(data.token !== empty)
      {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(this.loginObj));  
        toastr.success('Sucsess', 'Authoraized');
        this.router.navigateByUrl("home");
      } 
      else
      {
        toastr.error('Invalid Credentials!', 'Login Failed');
      }
    });

    console.log(this.loginObj);
  }

}
