import { Injectable } from '@angular/core';
import { ServerRequestService } from "./server-request.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private sr: ServerRequestService) { }
}
