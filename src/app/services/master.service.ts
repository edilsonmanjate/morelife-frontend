import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, APIResponseDonator, Donator } from '../model/master';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = 'https://localhost:7220/api/';

  constructor(private http: HttpClient) { }


  getDonator(): Observable<APIResponseDonator> {
    return this.http.get<APIResponseDonator>(this.apiUrl + 'donators/getall');
  }

  createNewDonator(obj: Donator): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.apiUrl + 'donators/create', obj);
  }
}
