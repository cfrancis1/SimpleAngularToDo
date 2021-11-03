import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private toDoService: ToDoService){

  }

  addForm: FormGroup;


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      task: ['', Validators.required]

    });
  }

  onSubmit() {
    this.toDoService.addToDo(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-todos']);
      });
  }

}
