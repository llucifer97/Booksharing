import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  public bookid: string | null = "" as string;

  transactions : any = {};

  constructor(private route : ActivatedRoute ,private transactionService : TransactionService) { }
  ngOnInit(): void {
     let id =   this.route.snapshot.paramMap.get('id');
    this.bookid = id;
    this.call();

  }



  call() {

    return this.transactionService.getUserTransaction(this.bookid as string) .subscribe( data => {
    this.transactions = data;
    console.log(data);

   });

   }






}
