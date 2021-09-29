import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RegisterDTO } from '../models/register-dto';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'https://localhost:5001/api/account/register';
  constructor(private _http: HttpClient) { }

  enroll (user: RegisterDTO) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
