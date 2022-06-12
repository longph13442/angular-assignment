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
    return this.http.get<TypeUser[]>(environment.users)
  }
  // get a
  getaUser(_id: any): Observable<TypeUser> {
    return this.http.get<TypeUser>(`${environment.users}/${_id}`)
  }
  removeUser(_id: any): Observable<TypeUser> {
    return this.http.delete<TypeUser>(`${environment.users}/${_id}`)
  }
  editUser(_id: any,data:TypeUser): Observable<TypeUser> {
    return this.http.put<TypeUser>(`${environment.users}/${_id}`,data)
  }
  signup(data: TypeUser): Observable<TypeUser> {
    return this.http.post<TypeUser>(`${environment.user}`, data)
  }
  signin(data: Typesignin): Observable<Typesignin> {
    return this.http.post<Typesignin>(`${environment.signin}`, data)
  }




}
