import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {
  listId = '';
  tasks: any[];
  title;

  forwardLink;
  constructor(private ts: TaskService,
    private router: Router,
    private plusLong: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.plusLong.paramMap.subscribe(params => {
      this.listId = params.get('listId');
    });
  }
  createTask(title) {
    this.ts.addTask(this.listId, title).subscribe((response: any) => {
      this.tasks = response;
      this.forwardLink = this.listId;
      this.router.navigate(['./dashboard/' + this.forwardLink]);
    })
  }
}