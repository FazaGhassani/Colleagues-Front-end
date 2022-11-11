import { Component, OnInit } from '@angular/core';
import {Freelancer, FreelancerModel} from "../../model/freelancer";
import {FreelanceService} from "../service/freelance.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-freelancerscrud',
  templateUrl: './freelancerscrud.component.html',
  styleUrls: ['./freelancerscrud.component.css']
})
export class FreelancerscrudComponent implements OnInit {

  modelFreelancer = new FreelancerModel(0, '', '','', '');
  submitted = false;
  constructor(private freelanceService : FreelanceService, private router: Router) {}

  ngOnInit(): void {
  }

  validateNo(e: any): boolean{
    const charCode = e.which ? e.which: e.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      return false
    }
    return true
  }

  onSubmit(){
    this.submitted = true;
    this.addFreelancer();
    this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  addFreelancer(
    name : string = this.modelFreelancer.name,
    skill : string = this.modelFreelancer.skill,
    phone : string = this.modelFreelancer.phone,
    notes : string = this.modelFreelancer.notes
  ): void {
    name = name.trim();
    this.freelanceService.addFreelancer({name,phone,skill,notes} as Freelancer)
      .subscribe(freelancer => {})
  }

}
