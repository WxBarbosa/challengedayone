import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MenuInformation } from '../models/menu_information';

@Injectable({
  providedIn: 'root'
})
export class MenuInformationService {

  url: string = 'http://localhost:3000/home_information';

  constructor(
    private httpClient : HttpClient
  ) { }

  httpOption = {
    'headers': new HttpHeaders({'Content-Type':'application/json'})
  }

  getMenuInformations(): Observable<MenuInformation[]>{
    return this.httpClient.get<MenuInformation[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof(ErrorEvent)){
      errorMessage = error.error.message;
    }else{
      errorMessage = `The error code: ${error.status}, message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
