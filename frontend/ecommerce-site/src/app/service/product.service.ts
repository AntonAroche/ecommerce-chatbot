import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
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
  authToken;
  public productList = []
  public products = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {
    this.init()
  }

  init() {
    this.http.post(`${environment.backendUrl}/api-token-auth/`, {
      username: 'Admin',
      password: 'Powerful123'
    }).subscribe((data: any) => {
      this.authToken = `Token ${data.token}`
      this.fetchProducts()
    })
  }

  fetchProducts() {
    let headers = new HttpHeaders().set('Authorization', this.authToken)
    this.http.get(`${environment.backendUrl}/products/items/`, { headers })
      .subscribe((data: any) => {
        const phones = []
        const laptops = []
        const cameras = []
        const computers = []
        const fixed = data.filter(item => item.picture !== 'images/default.jpeg')
        fixed.forEach(element => {
          console.log(1)
          const split = element.description.split(" ")
          console.log(split)
          if (split[split.length - 1] === 'phone') {
            phones.push(element)
          }
          if (split[split.length - 1] === 'Laptop') {
            laptops.push(element)
          }
          if (split[split.length - 1] === 'camera') {
            cameras.push(element)
          }
          if (split[split.length - 1] === 'computer') {
            computers.push(element)
          }

        });
        console.log(phones)
        const combined = phones.concat(laptops, cameras, computers)
        console.log(combined)
        this.products.next(combined)
      })
  }

  getProducts() {
    return this.products.asObservable()
  }
}
