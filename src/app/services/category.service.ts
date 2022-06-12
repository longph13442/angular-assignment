import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCategory } from '../type/TypeProducts';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  // getall
  getCategory(): Observable<TypeCategory[]> {
    return this.http.get<TypeCategory[]>(environment.category)
  }
  // get a
  getaCategory(_id: any): Observable<TypeCategory> {
    return this.http.get<TypeCategory>(`${environment.category}/${_id}`)
  }
  removeCategory(_id: any): Observable<TypeCategory> {
    return this.http.delete<TypeCategory>(`${environment.category}/${_id}`)
  }
  editCategory(_id: any,data:TypeCategory): Observable<TypeCategory> {
    return this.http.put<TypeCategory>(`${environment.category}/${_id}`,data)
  }
}
