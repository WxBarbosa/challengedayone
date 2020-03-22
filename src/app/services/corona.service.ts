import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})

export class CoronaService {

url: string = 'https://coronavirus-tracker-api.herokuapp.com/v2/';
httpOption: {}

constructor(
  private httpClient : HttpClient)
{
  
  this.httpOption = {
    'headers': new HttpHeaders({'Content-Type':'application/json'})
  }
  
}

  getLatestLocationsByCountryCode(countryCode : string): Observable<Location[]>{
    
    var urlLocation = `${this.url}/locations`;

    const options = countryCode ?
    { params: new HttpParams().set('country_code', countryCode) } : {};

    return this.httpClient.get<Location[]>(urlLocation,options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  listAllLatestLocation(): Observable<Location[]>{
    var urlLocation = `${this.url}/locations`;
        
    return this.httpClient.get<Location[]>(urlLocation)
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
