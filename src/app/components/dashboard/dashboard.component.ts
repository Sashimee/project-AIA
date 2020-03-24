import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  lists: any[];
  tasks: any[];
  listId;


  constructor(private ts: TaskService, private plusCourt: ActivatedRoute) { }

  ngOnInit(): void {
    //this.listId = this.plusCourt.snapshot.paramMap.get('listId');
    //ça prend un shapshot à un instant t et comme on ne rafraîchit pas réellement tout le component c'est pas bon ...
    this.plusCourt.paramMap.subscribe(params => {
      this.listId = params.get('listId');
      this.ts.getTasks(this.listId).subscribe((response: any) => {
        console.log(response);
        this.tasks = response;
      })
    });

    this.ts.getLists().subscribe((response: any) => {
      console.log(response);
      this.lists = response;
    })
  }

}
