import { Injectable } from '@angular/core';
//import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpResponse , HttpErrorResponse } from '@angular/common/http';
import { ITransaction, IResponse } from './tax-documents/shared/transaction.model';
import { ITransactionSummary } from './tax-documents/shared/transaction.model';
import { Observable, throwError } from 'rxjs';
import { environment } from './../environments/environment';
//import { map } from 'rxjs/operators';
//const baseURL = 'https://icttaxapi.azurewebsites.net/api/v' //Prod baseURL
//const baseURL = 'https://localhost:7198/api/v1' //this goes in environment.ts


@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseURL:string = "https://icttaxapi.azurewebsites.net/api/v1";

  constructor(private http: HttpClient) { 
    // if (environment.production) {
    //   console.log('this.baseURL');
    // }
   // this.baseURL = environment.apiUrl;
    
  }
  
  getTaxTransactions(sortValue: string): Observable<HttpResponse<IResponse>> {
    
    return this.http.get<IResponse>(
      this.baseURL + "?sortValue=" + sortValue, { observe: 'response' });
  }

  getTaxClientTransactions(client: string, sortValue: string): Observable<HttpResponse<ITransaction[]>> {
    console.log(sortValue)
    return this.http.get<ITransaction[]>(
      this.baseURL + "/client/" + client + "?sortValue=" + sortValue, { observe: 'response' });
  }

  getTaxSummary(): Observable<HttpResponse<ITransactionSummary>> {
    return this.http.get<ITransactionSummary>(
      this.baseURL + "/summary", { observe: 'response' });
  }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
