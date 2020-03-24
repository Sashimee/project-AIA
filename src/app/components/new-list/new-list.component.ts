import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.sass']
})
export class NewListComponent implements OnInit {

  forwardLink;
  constructor(private ts: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  igorOnTeVoit(title) { //pour créér une liste
    console.log(title);
    this.ts.createList(title).subscribe((reponse: any) => {
      console.log(reponse);
      this.forwardLink = reponse._id;
      this.router.navigate(['./dashboard/' + this.forwardLink]);
    });
  }

}
