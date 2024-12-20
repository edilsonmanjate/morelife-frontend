import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DonatorComponent } from './pages/donator/donator.component';
import { DonationComponent } from './pages/donation/donation.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path:'login',
        component : LoginComponent
    },
    {
        path:'',
        component : LayoutComponent,
        children : [
            {
                path:'home',
                component : HomeComponent
            },
            {
                path:'donator',
                component : DonatorComponent
            },
            {
             path:'donation',
                component : DonationComponent
            },
        ]   
    }
];
