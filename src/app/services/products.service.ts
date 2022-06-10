import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeProducts } from '../type/TypeProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  // get all
  getProducts(): Observable<TypeProducts[]>{ // đọc kiểu dữ liệu trả về
    return this.http.get<TypeProducts[]>(environment.products) // đường dẫn api
  }
  // get a
  getProduct(id:any): Observable<TypeProducts>{
    return this.http.get<TypeProducts>(`${environment.products}/${id}`)
  }
  
}
