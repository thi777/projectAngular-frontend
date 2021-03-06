import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  private readonly API = "http://localhost:3000/products"

  constructor( private http: HttpClient ) { }
  
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.API)                     
  }

  post(selectedForm): Observable<any> {
    const formData = new FormData()
    formData.append('file', selectedForm)
    
    return this.http.post<any[]>(`${this.API}`, formData )
  }

  put(id): Observable<any> {
    const formData = new FormData()
    return this.http.put(`${this.API}/${id}`, formData)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`)
  }
}
