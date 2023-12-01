import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentComponent } from './payment/payment.component';
import { LoanPlansComponent } from './loan-plans/loan-plans.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [
 
{path:'home',component:HomeComponent},
{path:'loans',component:LoansComponent},
{path:'customers',component:CustomersComponent},
{path:'payment',component:PaymentComponent},
{path:'loan-plans',component:LoanPlansComponent},
{path:'invoices',component:InvoicesComponent},
{path:'reports',component:ReportsComponent},
{path:'settings',component:SettingsComponent},
{path:'',redirectTo:'/home', pathMatch:'full'},
{path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }