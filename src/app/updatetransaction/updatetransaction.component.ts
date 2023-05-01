import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'app/Service/transaction.service';

@Component({
  selector: 'app-updatetransaction',
  templateUrl: './updatetransaction.component.html',
  styleUrls: ['./updatetransaction.component.scss']
})
export class UpdatetransactionComponent implements OnInit {
  isSuccessful = false;
  currentTransaction = null;
  constructor(private ts:TransactionService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getTransaction(this.route.snapshot.paramMap.get('id'));
  }

  getTransaction(id): void {
    this.ts.GetByID(id)
      .subscribe(
        data => {
          this.currentTransaction = data;
          console.log(this.currentTransaction);
        },
        error => {
          console.log(error);
        });
  }

  updateTransaction(): void {
    this.ts.UpdateTransaction(this.currentTransaction)
      .subscribe(
        response => {
          console.log(response);
        
        },
        error => {
          console.log(error);
        });
  }

}
