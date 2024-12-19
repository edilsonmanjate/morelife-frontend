import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  title = 'morelife-frontend';  

  constructor() {
  }

  ngOnInit() {
  }

    ngOnDestroy() {

      
 
    
    }

}
