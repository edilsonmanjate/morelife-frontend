import { Component, OnInit, inject } from '@angular/core';
import { APIResponse, APIResponseDonator, Donator } from '../../model/master';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import * as toastr from 'toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-donator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donator.component.html',
  styleUrl: './donator.component.scss'
})
export class DonatorComponent implements OnInit {

  donatorObj: Donator = {
    ...new Donator(), address: {
      id: '',
      street: '',
      city: '',
      state: '',
      postalCode: ''
    }
  };
  masterService = inject(MasterService);

  donatorList: any;


  ngOnInit(): void {
    this.loadDonator();

  }

  loadDonator() {
    this.masterService.getDonator().subscribe((res: APIResponseDonator) => {
      console.log((res.data));
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

  onDelete(id: string) {
    swal.fire({

      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this donator!",
      icon: "warning",

      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'

    }).then((result) => {
      const willDelete = result.isConfirmed;
      if (willDelete) {
        this.masterService.deleteDonator(id).subscribe((data: APIResponse) => {
          if (data.success) {
            toastr.success('Success', 'Donator deleted successfully');
            this.loadDonator();
          } else {
            toastr.error('Error', 'Donator deletion failed');
          }
        });
      } else {
        toastr.info('Info', 'Donator deletion cancelled');
      }
    });
  }

  onEdit(item: Donator) {

    this.donatorObj = item;

  }

  onUpdateDonator() {
    this.masterService.updateDonator(this.donatorObj).subscribe((data: APIResponse) => {
      if (data.success) {
        toastr.success('Success', 'Donator updated successfully');
        this.donatorObj = new Donator();
        this.loadDonator();
      } else {
        toastr.error('Error', 'Donator update failed');
      }
    });
  }


}
