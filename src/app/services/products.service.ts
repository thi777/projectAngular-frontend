import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productsUrl = "http://localhost:3000/products"

  constructor( private http: HttpClient ) { }

  list(){
    return this.http.get<any[]>(`${this.productsUrl}`)
  }
}
