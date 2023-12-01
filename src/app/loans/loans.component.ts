import { Component } from '@angular/core';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
Topics=['Leasing for Vehicles','Home Loans','Educational Loans','Other Loans'];
customerModel=new Customer('JOE ROOT','950341297V','03/02/1995','0757397394','Leasing for Vehicles','189/A Gall rd Bambalapitiya');

onSubmit(){




  
}


}
