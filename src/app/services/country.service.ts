import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url: string = 'https://restcountries.eu/rest/v2';
  httpOption: {}
  
  constructor(
    private httpClient : HttpClient)
  {
    
    this.httpOption = {
      'headers': new HttpHeaders({'Content-Type':'application/json'})
    }
    
  }
  
    listAllCountries(): Observable<Country[]>{
      
      var urlLocation = `${this.url}/all`;

      return this.httpClient.get<Country[]>(urlLocation)
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