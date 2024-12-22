import { Component, OnInit, inject } from '@angular/core';
import { APIResponse, APIResponseDonator, Donator } from '../../model/master';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-donator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donator.component.html',
  styleUrl: './donator.component.scss'
})
export class DonatorComponent implements OnInit {

  donatorObj: Donator = new Donator();
  masterService = inject(MasterService);

  donatorList: any;


  ngOnInit(): void {
    this.loadDonator();

  }

  loadDonator() {
    this.masterService.getDonator().subscribe((res: APIResponseDonator) => {
      this.donatorList = res.data;
    });
  }

  onSaveDonator() {
    this.donatorObj.id = this.generateGuid();
    this.donatorObj.address.id = this.generateGuid();
    console.log(this.donatorObj);
    this.masterService.createNewDonator(this.donatorObj).subscribe((data: APIResponse) => {
      if (data.success) {
        toastr.success('Success', 'Donator created successfully');
        this.donatorObj = new Donator();
      } else {
        toastr.error('Error', 'Donator creation failed');
      }
    });
  }
  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


}
