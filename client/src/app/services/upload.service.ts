import { SellerDTO } from './../models/seller-dto';
import { OrderDTO } from './../models/order-dto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {


  _url = 'https://localhost:5001/api/sell';
  constructor(private _http: HttpClient) { }

  uploadBook (user: SellerDTO) {
    return this._http.post<SellerDTO>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }


}
