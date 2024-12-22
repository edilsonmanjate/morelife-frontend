
export class Donator {
    id: string;
    name: string;
    email: string;
    birthDate: string;
    genre: 'Male' | 'Female' ;
    weight: number;
    height: number;
    bloodType: 'A' | 'B' | 'AB' | 'O';
    rhFactor: 'Positive' | 'Negative';
    address: Address;

    constructor() {
        this.id = '';
        this.name = '';
        this.email = '';
        this.birthDate = '';
        this.genre = 'Male';
        this.weight = 0;
        this.height = 0;
        this.bloodType = 'O';
        this.rhFactor = 'Positive';
        this.address = { id: '', street: '', city: '', state: '', postalCode: '' };
    }
}
 
 

export interface Address {
    id: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
  }

export interface APIResponse {
    success: string;
    message: string;
    data: any;
    errors : any;
}



export interface APIResponseDonator {
    success: string;
    message: string;
    data: Donator;
    errors : any;
}
