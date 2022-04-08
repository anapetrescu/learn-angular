import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStudents(type): Observable<any> {
    return this.httpClient.get("http://localhost:3000/" + type)
  }
}
