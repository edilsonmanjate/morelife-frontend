import { Component } from '@angular/core';
import { Donator } from '../../model/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donator.component.html',
  styleUrl: './donator.component.scss'
})
export class DonatorComponent {

  donatorObj: Donator = new Donator();

}
