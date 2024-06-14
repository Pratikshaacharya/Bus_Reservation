import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }
  registerUser(user:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:9090/BusReservationSystem/registerOrUpdateUser",user);

  }
}
