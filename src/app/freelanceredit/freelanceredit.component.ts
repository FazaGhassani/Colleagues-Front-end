import {Component, Input, OnInit} from '@angular/core';
import {Freelancer, FreelancerModel} from "../../model/freelancer";
import {FreelanceService} from "../service/freelance.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-freelanceredit',
  templateUrl: './freelanceredit.component.html',
  styleUrls: ['./freelanceredit.component.css']
})
export class FreelancereditComponent implements OnInit {

  idFreelancer : any;
  //freelancer : Freelancer | undefined ;
  modelFreelancer = new FreelancerModel(0, '', '','', '');
  submitted = false;
  constructor(private freelanceService : FreelanceService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idFreelancer = this.route.snapshot.paramMap.get('id'); //cara parsing, jangan lupa routenya /freelanceredit/:id
    this.getFreelancerById();
  }

  getFreelancerById() {
    try {
      this.freelanceService.getFreelancerById(this.idFreelancer).subscribe((res) => {
        //this.freelancer = res;
        this.modelFreelancer.id = res.id;
        this.modelFreelancer.name = res.name;
        this.modelFreelancer.skill = res.skill;
        this.modelFreelancer.phone = res.phone;
        this.modelFreelancer.notes = res.notes;
      });
    } catch (e) {
      alert("Data tidak bisa keluar");
    }
  }

  editFreelancer(
    id : number = this.modelFreelancer.id,
    name : string = this.modelFreelancer.name,
    skill : string = this.modelFreelancer.skill,
    phone : string = this.modelFreelancer.phone,
    notes : string = this.modelFreelancer.notes
  ): void {
    name = name.trim();
    this.freelanceService.editFreelancer({id,name,phone,skill,notes} as Freelancer)
      .subscribe(freelancer => {})
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
    this.editFreelancer();
    this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }


}
