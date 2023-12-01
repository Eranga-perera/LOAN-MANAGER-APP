import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestService } from './test.service';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoanPlansComponent } from './loan-plans/loan-plans.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    LoanPlansComponent,
    CustomersComponent,
    LoansComponent,
    PaymentComponent,
    InvoicesComponent,
    ReportsComponent,
    SettingsComponent,
    NotfoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
