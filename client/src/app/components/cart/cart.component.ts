import { OrderDTO } from './../../models/order-dto';
import { BuyproductService } from './../../services/buyproduct.service';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public bookid: string  = "";
  public username :string = "";

  data =  {
    rating : 0,
    total : 0
  }

  userModel = new OrderDTO('','',0,0,0);
  count:string = "1";
  public book : any = {};


  constructor(private route : ActivatedRoute , private searchService : SearchService ,private router : Router
              ,private buyproductService: BuyproductService) { }

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('user') as string).username;
     let id =   this.route.snapshot.paramMap.get('id') as string;
    this.bookid = id;
    this.call();
  }


  onSubmit()
  {
    this.data.total = parseInt(this.count) * this.book.price;
    this.userModel.BookTitle = this.book.title;
    this.userModel.Price = this.book.price;
    this.userModel.Total = this.data.total;
    this.userModel.Count = parseInt(this.count);
    this.userModel.UserID = this.username;
    console.log(this.userModel);
    this.initiateTransaction();
  }

  seeAllTransaction()
  {
    this.router.navigate(["checkout/" , this.username] )

  }

  initiateTransaction() {
    this.buyproductService.buyproduct(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log(error)
      )
  }


  call() {
    return this.searchService.getBooksByTitle(this.bookid).subscribe( data => {
    this.book = data;
   });
  }





}
