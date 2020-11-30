import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpBackend,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {Quotes} from './../quotes-all/quotes-all.component'

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient, private router: Router) {}
  handleError(err: HttpErrorResponse) {
    if (err.status === 401) {
      alert('Unauthorized or token expired');
      this.router.navigate(['/login']);
    } else console.log('Some other error when calling api', err);
  }

  getQuotes():Observable<Quotes[]> {
    return this.http.get<Quotes[]>('/assets/quotes.json')
  }
  
}
