import { Component } from '@angular/core';
import {Freelancer} from "../../model/freelancer";
import {FreelanceService} from "../service/freelance.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Freelancers : Freelancer[] = [];
  constructor(private freelanceService : FreelanceService) {}

  ngOnInit(): void {
    this.Freelancers = [];
    this.getAllFreelancers();
  }

  getAllFreelancers() {
    try {
      this.freelanceService.getAllFreelancer().subscribe((res) => {
        this.Freelancers = res;
        console.log(this.Freelancers, "data masuk");
      });
    } catch (e) {
      alert("Data tidak bisa keluar");
    }
  }

}
