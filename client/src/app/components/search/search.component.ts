import { Router } from '@angular/router';
import { BookDTO } from './../../models/BookDTO';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   constructor(private searchService : SearchService , public router : Router ) { }

  data =  {
    search : ""

  }

  books : any = {
    "id": 4,
    "title": "heman",
    "price": 256,
    "author": "William",
    "genre": "Tech",
    "year": "2008",
    "language": "English",
    "rating": 0,
    "url": "https://img.colorpic.com",
    "sellId": "srishti"
  };


flag:boolean = false;

item : string = "";

  onSubmit()
  {

    this.call();
    if(this.books != null && this.books[0] != null){
      this.flag = true;

    }else{

      console.log("loading..");
     }


  }


  onBuy()
  {
    console.log("buy clicked!!");
    this.router.navigate(["cart/",this.books.title] )

  }


  ngOnInit() {
  }


   call() {

    return this.searchService.getBooksByTitle(this.data.search) .subscribe( data => {
    this.books = data;
    console.log(data);

   });

   }

}
