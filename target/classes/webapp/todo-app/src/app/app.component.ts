import {Component, OnInit} from '@angular/core';
import {ToDo} from './todo/ToDo';
import {ToDoService} from './todo/todo.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todos!: ToDo[];

  constructor(private router: Router, private toDoService: ToDoService) {
  }

  getToDos() {
    this.toDoService.getToDos().subscribe(data => {
      this.todos = data;
    });
  }

  addToDo(): void {
    this.router.navigate(['add-todo'])
      .then((e) => {
        if (e) {
          console.log("Navigation successful!");
        } else {
          console.log("Navigation failed!");
        }
      });
  }

  deleteToDo(todo) {
    this.toDoService.deleteToDo(todo.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getToDos();
      },
      (err) => console.log(err)
    ); 
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getToDos();

    });
  }

}
