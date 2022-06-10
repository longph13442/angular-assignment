import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeProducts } from '../type/TypeProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { 

  }
  getlist():Observable<TypeProducts[]>{
    return this.http.get<TypeProducts[]>(environment.cart)
  }
}
