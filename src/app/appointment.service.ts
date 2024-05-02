import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpclient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/appointment"

  getAllAppointments():Observable<Appointment[]>{

    return this.httpclient.get<Appointment[]>(`${this.baseUrl}`);
  }
}
