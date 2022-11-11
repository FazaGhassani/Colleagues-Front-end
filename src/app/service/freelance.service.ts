import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Freelancer} from "../../model/freelancer";

@Injectable({
  providedIn: 'root'
})
export class FreelanceService {
  private serviceURL: string = "http://localhost:3005/freelancers";
  constructor(private http: HttpClient) {}

  getAllFreelancer(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.serviceURL);
  }

  getFreelancerById(id : string):Observable<Freelancer> {
    return this.http.get<Freelancer>(this.serviceURL+"/"+id);
  }

  addFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.post<Freelancer>(this.serviceURL, freelancer);
  }

  deleteFreelancer(id : number): Observable<Freelancer>{
    return this.http.delete<Freelancer>(this.serviceURL+"/"+id)
  }

  editFreelancer(freelancer:Freelancer):Observable<Freelancer>{
    return this.http.put<Freelancer>(this.serviceURL+"/"+freelancer.id, freelancer);
  }

}
