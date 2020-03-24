import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  lists: any[];
  tasks: any[];
  listId = '';
  forwardLink;


  constructor(private ts: TaskService,
    private plusCourt: ActivatedRoute,
    private router: Router
  ) { }

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

  deleteThisTask(taskId, listId) {
    this.ts.deleteTask(taskId, listId).subscribe((response: any) => {
      console.log(response._listId);
      this.ts.getTasks(this.listId).subscribe((response: any) => {
        console.log(response);
        this.tasks = response;
      })
      // this.forwardLink = response._listId;
      // this.router.navigate(['./dashboard/' + this.forwardLink]);
    })
  }

}
