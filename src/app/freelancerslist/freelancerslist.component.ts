import {Component, Input} from '@angular/core';
import {Freelancer} from "../../model/freelancer";
import {FreelanceService} from "../service/freelance.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-freelancerslist',
  templateUrl: './freelancerslist.component.html',
  styleUrls: ['./freelancerslist.component.css']
})
export class FreelancerslistComponent {
  constructor(private freelanceService : FreelanceService, private router: Router) {}
  @Input() freelancers! : Freelancer[];

  ngOnInit(): void {
  }

  delete(id: number){
    this.deleteFreelancer(id);
    this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  update(idFreelancer:number){
    this.router.navigateByUrl('/freelanceredit/:id', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/freelanceredit',idFreelancer]);
    });
  }

  //untuk delete ke API
  deleteFreelancer(
    id: number
  ):void{
    this.freelanceService.deleteFreelancer(id)
      .subscribe(freelancer=>{
          this.freelancers.forEach((freelancer,index)=>{
            if(freelancer.id==id) this.freelancers.splice(index, 1);
          });
        }
      )
  }

}
