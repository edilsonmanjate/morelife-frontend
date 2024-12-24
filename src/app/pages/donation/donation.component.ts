import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { APIResponse, Donation, Donator } from '../../model/master';
import * as toastr from 'toastr';


@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent implements OnInit {

  donationForm: FormGroup = new FormGroup({});
  masterService = inject(MasterService);
  donatorList = signal<Donator[]>([]);
  donationsList: Donation[] = [];
  donatorName: string = '';

  initializeForm() {
    this.donationForm = new FormGroup({
      donatorId: new FormControl(this.masterService.generateGuid()),
      date: new FormControl(new Date()),
      quantity: new FormControl(0)
    });
  }

  constructor() {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.getDonator();
    this.loadDonations();
  }

  loadDonations() {
    this.masterService.getDonations().subscribe((res: APIResponse) => {
      this.donationsList = res.data;
      this.donationsList.forEach((donation: Donation) => {
        
      });
    });
  }

  getDonator() {
    this.masterService.getDonator().subscribe((res: APIResponse) => {
      this.donatorList.set(res.data);
    });
  }

  onSave() {
    this.donationForm.value.id = this.masterService.generateGuid();
    this.masterService.createNewDonation(this.donationForm.value).subscribe((res: APIResponse) => {
      console.log(res);
      if (res.success) {
        toastr.success('Success', 'Donation created successfully');
        this.initializeForm();
        this.getDonator();
      } else {
        toastr.error('Error', 'Donation creation failed');
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
