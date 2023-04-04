import { Injectable } from '@angular/core';
//import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpResponse , HttpErrorResponse } from '@angular/common/http';
import { ITransaction, IResponse } from './tax-documents/shared/transaction.model';
import { ITransactionSummary } from './tax-documents/shared/transaction.model';
import { Observable, throwError } from 'rxjs';
import { environment } from './../environments/environment';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private API_URL = environment.API_URL;
  baseURL:string = "https://icttaxapi.azurewebsites.net/api/v1";

  constructor(private http: HttpClient) { 
  }
  
  getTaxTransactions(sortValue: string): Observable<HttpResponse<IResponse>> {
    
    return this.http.get<IResponse>(
      this.API_URL + "?sortValue=" + sortValue, { observe: 'response' });
  }

  getTaxClientTransactions(client: string, sortValue: string): Observable<HttpResponse<ITransaction[]>> {
    console.log(sortValue)
    return this.http.get<ITransaction[]>(
      this.API_URL + "/client/" + client + "?sortValue=" + sortValue, { observe: 'response' });
  }

  getTaxSummary(): Observable<HttpResponse<ITransactionSummary>> {
    return this.http.get<ITransactionSummary>(
      this.API_URL + "/summary", { observe: 'response' });
  }

  postTaxDocument(formData:FormData) {
    return this.http.post(this.API_URL, formData, { reportProgress: true, observe: 'events' });
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
