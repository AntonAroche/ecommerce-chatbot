import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

export interface ProductsResponse {
  intent: string;
  entity: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public options = {
    observe: 'body',
    responseType: 'json'
  }
  constructor(private http: HttpClient) { }

  getResponse(msg: String) {
    const body = {
      user_input: msg
    }
    return this.http.get<ProductsResponse>(`${environment.backendUrl}/Chatbot`)
      .subscribe(data => {

      })
  }
}
