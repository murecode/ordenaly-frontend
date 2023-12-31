import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";
import { ITicket } from "../interfaces/ITicket.interface"; 

@Injectable({providedIn: 'root'})
export class TicketService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) {}

  getTickets():Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${this.baseUrl}/tickets`)
  }

  getTicket( id:string ):Observable<ITicket> {
    return this.http.get<ITicket>(`${this.baseUrl}/tickets/${ id }`)
  }

  newTicket():Observable<ITicket> {
    return this.http.post<ITicket>(`${this.baseUrl}/tickets`, {})
  }


}