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
export class TransactionService {


  private url: string = "https://localhost:5001/api/order/";


  constructor(private http:HttpClient) { }

  getUserTransaction(username : string){
    return this.http.get(this.url + username)
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }


}

