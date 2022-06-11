import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Typesignin, TypeUser } from '../type/TypeUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getall
  getUser(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(environment.user)
  }
  // get a
  getaUser(id: any): Observable<TypeUser> {
    return this.http.get<TypeUser>(`${environment.user}/${id}`)
  }
  signup(data: TypeUser): Observable<TypeUser> {
    return this.http.post<TypeUser>(`${environment.user}`, data)
  }
  signin(data: Typesignin): Observable<Typesignin> {
    return this.http.post<Typesignin>(`${environment.signin}`, data)
  }


}
