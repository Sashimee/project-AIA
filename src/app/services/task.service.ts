import { Injectable } from '@angular/core';
import { ServerRequestService } from "./server-request.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private sr: ServerRequestService) { }
  createList(title) {
    return this.sr.postAIA('/lists', { title });
  }
  getLists() {
    return this.sr.getAIA('/lists');
  }
  getTasks(listId) {
    return this.sr.getAIA('/lists/' + listId + '/tasks');
  }
  addTask(listId, title) {
    console.log('/lists/' + listId + '/tasks', { title });

    return this.sr.postAIA('/lists/' + listId + '/tasks', { title });
  }
}
