import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpComunicationService {
  private apiUrl = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}
  
  postData(data: unknown): Observable<unknown> {
    return this.http.post<unknown>(this.apiUrl, data);
  }
}
