import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, APIResponseDonator, Donation, Donator } from '../model/master';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = 'https://localhost:7220/api/';

  constructor(private http: HttpClient) { }

  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  getDonator(): Observable<APIResponseDonator> {
    return this.http.get<APIResponseDonator>(this.apiUrl + 'donators/getall');
  }

  getDonatorById(id:string): Observable<APIResponseDonator> {
    return this.http.get<APIResponseDonator>(this.apiUrl + 'donators/get?donatorId=' + id);
  }

  createNewDonator(obj: Donator): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.apiUrl + 'donators/create', obj);
  }

  deleteDonator(id: string): Observable<APIResponse> {
    return this.http.delete<APIResponse>(this.apiUrl + 'donators/delete?Id=' + id);
  }

  updateDonator(obj: Donator): Observable<APIResponse> {
    return this.http.put<APIResponse>(this.apiUrl + 'donators/update', obj);
  }

  createNewDonation(obj: Donation): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.apiUrl + 'donations/create', obj);
  }
  getDonations(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl + 'donations/getall');
  }

  getDashboard(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl + 'dashboards');
  }

}
