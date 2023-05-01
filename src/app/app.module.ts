import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TransactionService } from './Service/transaction.service';
import { TransactionComponent } from './transaction/transaction.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { UpdatetransactionComponent } from './updatetransaction/updatetransaction.component';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TransactionComponent,
    AddtransactionComponent,
    UpdatetransactionComponent
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
