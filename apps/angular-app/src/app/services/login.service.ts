import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUsersUrl = 'http://localhost:3001/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUsersUrl);
  }
  
  postNewUser(data: unknown): Observable<any> {
    return this.http.post<any>(this.apiUsersUrl, data);
  }
}
