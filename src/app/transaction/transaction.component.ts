import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'app/Entity/Transaction';
import { TransactionService } from 'app/Service/transaction.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
 

 transactions?:Transaction[]=[];
 tr:Transaction;
 typestat:string;
 stat:any=null;

  constructor(private ts:TransactionService,private route :Router) { 
    

  }
 
  ngOnInit(): void {
  this.ts.getAllTransactions().subscribe(data =>{
    this.transactions=data;
  }


  )
  }

  deletetransaction(id:number){
    this.ts.UndoTransaction(id,this.tr).subscribe(response=>{
      this.reloadPage();
    }
    
    )

  }
  reloadPage(): void {
    window.location.reload();
  }
  redirecttoupdate(id:number){

    this.route.navigate(["/update/"+id])
  }
  getTransactionstat(typestate:string){
    this.ts.static(typestate).subscribe( data =>{
      this.stat=data;

      console.log(data);
    }

    )
  }





  }


