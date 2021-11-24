import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data:any) {
        data = { email: 'admin', password: 'admin   ' };
        console.log(data,'Data')
        return this.http.post('http://localhost:4000/api/chatMsg', data);
    }
    // getCustomerDetails() {
    //     return this.http.get('http://localhost:3070/customers/details');
    // }

}