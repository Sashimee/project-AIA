import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {
  path = '';
  data = [];
  baseUrl = 'localhost:3000'
  constructor(private http: HttpClient) { }

  get(path: any) {
    return this.http.get(this.baseUrl + path);
  }

  post(path: any, data: any) {
    return this.http.post(this.baseUrl + path, data);
  }

  patch(path: any, data: any) {
    return this.http.patch(this.baseUrl + path, data);
  }

  delete(path: any) {
    return this.http.delete(this.baseUrl + path);
  }
}
