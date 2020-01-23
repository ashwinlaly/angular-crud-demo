import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers : HttpHeaders;

  constructor(private $http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Accept: 'application/json'
    })
  }
    
  public createUser(_data) : Observable<any>{
    return this.$http.post(`${environment.APP_URL}/user`, _data)
  }

  public deleteuser(_id): Observable<any>{
    return this.$http.delete(`${environment.APP_URL}/user/${_id}`)
  }

  public updateuser(_id, _data) : Observable<any>{
    return this.$http.patch(`${environment.APP_URL}/user/${_id}`, _data)
  }

  public getusers(): Observable<any>{
    return this.$http.get(`${environment.APP_URL}/users`)
  }

  public getuser(_id): Observable<any>{
    return this.$http.get(`${environment.APP_URL}/user/${_id}`)
  }
  
}
