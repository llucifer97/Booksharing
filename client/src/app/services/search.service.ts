import { BookDTO } from './../models/BookDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {throwError as observableThrowError } from 'rxjs';
import {  HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url: string = "https://localhost:5001/api/book/title/";
  private urlforbookbyId : string = "https://localhost:5001/api/book/"

  constructor(private http:HttpClient) { }

  getBooksByTitle(search : string){
    return this.http.get<BookDTO>(this.url + search)
  }

  getBookById(bookid : string){
    console.log("this.url + bookid ==" + this.urlforbookbyId + bookid);

    return this.http.get<BookDTO>(this.urlforbookbyId + bookid)

  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}
