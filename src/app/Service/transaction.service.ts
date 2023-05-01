import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'app/Entity/Transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8081/Transaction/';
  constructor(private http: HttpClient) { }
  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl+'getAll');
  }
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl+'add', transaction);
  }
  UpdateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.apiUrl+'update', transaction);
  }

  GetByID(idtransaction: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiUrl+'getById/'+idtransaction);
  }

  deleteTransaction(idtransaction: number): Observable<Transaction> {
    return this.http.delete<Transaction>(this.apiUrl+'delete/'+idtransaction);
  }

  UndoTransaction(idtransaction: number,transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.apiUrl+'undo/'+idtransaction,transaction);
  }

  static(typeTransaction: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl+'transactionStat/'+typeTransaction);
  }

  
}
