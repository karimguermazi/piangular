import { Component, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Transaction } from 'app/Entity/Transaction';
import { TransactionService } from 'app/Service/transaction.service';
import { data } from 'jquery';
@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddtransactionComponent implements OnInit {

  items = [ 'TRANSFER','DEPOSIT','WITHDRAWAL'];
  isSuccessful = false;
  form: any = {
    type_transaction: null,
    amount: null,
    idCompteReciver: null,
    idCompteSender: null
  };
   
  
  constructor(private ts:TransactionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const transaction ={ idCompteReciver:this.form.idCompteReciver, idCompteSender:this.form.idCompteSender,amount:this.form.amount,type_transaction:this.form.type_transaction}  ;
  this.ts.createTransaction(transaction).subscribe(data=>{
    console.log(transaction);
  })

  

  }

}
