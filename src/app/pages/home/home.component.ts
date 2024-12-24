import { Component, inject } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MasterService } from '../../services/master.service';
import { APIResponse, Dashboard } from '../../model/master';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  title = 'morelife-frontend';  

    masterService = inject(MasterService);
    dashboardList: Dashboard = new Dashboard();
    

  constructor() {
  }

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.masterService.getDashboard().subscribe((res: APIResponse) => {
      this.dashboardList = res.data;
    });
  }
}
