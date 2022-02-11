import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../services/todoservice.service';


@Component({
  selector: 'app-todocreate',
  templateUrl: './todocreate.page.html',
  styleUrls: ['./todocreate.page.scss'],
})
export class TodocreatePage implements OnInit {

  title: any;
  content: any;

  constructor(private todo: TodoserviceService) { }

  ngOnInit() {
  }

  onSave()
  {
    const data =
    {
      title : this.title,
      content: this.content
    };
    // console.log(this.title);
    this.todo.saveData(data);
    // this.todo.dummy(data);
    console.log(this.title);
    console.log(this.content);
  }

}
