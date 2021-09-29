import { OrderDTO } from './../models/order-dto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyproductService {


  _url = 'https://localhost:5001/api/order';

  constructor(private _http: HttpClient) { }

  buyproduct (user: OrderDTO) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }



}
