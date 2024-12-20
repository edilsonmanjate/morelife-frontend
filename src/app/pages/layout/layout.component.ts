import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  loggedUser: any;
  router = inject(Router)

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.loggedUser = JSON.parse(user);
    }
  }

  onLogout(){
     localStorage.removeItem('user');
     this.router.navigateByUrl("login");
  }

}
