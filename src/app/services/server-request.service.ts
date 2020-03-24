import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {
  path = '';
  data = {};
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAIA(path: any) {
    return this.http.get(this.baseUrl + path);
  }

  postAIA(path: any, data: any) {
    return this.http.post(this.baseUrl + path, data);
  }

  patchAIA(path: any, data: any) {
    return this.http.patch(this.baseUrl + path, data);
  }

  deleteAIA(path: any) {
    return this.http.delete(this.baseUrl + path);
  }
}
