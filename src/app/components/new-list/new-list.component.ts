import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.sass']
})
export class NewListComponent implements OnInit {

  constructor(private ts: TaskService) { }

  ngOnInit(): void {
  }

  igorOnTeVoit(title) { //pour créér une liste
    console.log(title);
    this.ts.createList(title).subscribe((reponse: any) => {
      console.log(reponse);
    });
  }

}
