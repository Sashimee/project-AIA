import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  lists: any[];
  tasks: any[];
  constructor(private ts: TaskService, private plusCourt: ActivatedRoute) { }

  ngOnInit(): void {
    this.ts.getLists().subscribe((response: any) => {
      console.log(response);
      this.lists = response;
    })
    this.ts.getTasks('5e79db4b52e8f9346410261f').subscribe((response: any) => {
      console.log(response);
      this.tasks = response;
    })
  }
  listClickHandle() {

  }

}
