import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from './../services/todoservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Array<object>;

  constructor(private todoService: TodoserviceService) {}
  ngOnInit(){
  this.todoService.getTasks().subscribe((res)=>{
   this.todos.push(res.values);
  });
  console.log(this.todos);
  }

}
