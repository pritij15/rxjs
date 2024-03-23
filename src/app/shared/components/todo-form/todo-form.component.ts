import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from '../../model/todo';
import { UuidService } from '../../services/uuid.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
todoForm !: FormGroup;
isinEditMode : boolean = false;
editTodo !: Itodo;

  constructor(
    private _uuidService : UuidService,
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this.createTodoForm();
    this._todoService.editAndUpdateTodoSub$
      .subscribe(todo =>{
        //console.log(todo);
        this.editTodo = todo;
        this.isinEditMode = true;
        this.todoForm.patchValue(todo)
      })
  }

  createTodoForm(){
      this.todoForm = new FormGroup({
      todoItem : new FormControl(null, [Validators.required])
    })
  }
  onTodoSubmit(){
    if(this.todoForm.valid){
      console.log(this.todoForm.value);
      let todoObj :Itodo = {...this.todoForm.value, todoId: this._uuidService.uuid()}
      
      //this._todoService.todoSubject$.next(todoObj);
      this._todoService.addTodo(todoObj);
      this.todoForm.reset();
    }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let updatedObj = {...this.todoForm.value, todoId : this.editTodo.todoId }
      console.log(updatedObj);
      this._todoService.updateTodo(updatedObj);
      this.todoForm.reset();
      this.isinEditMode = false;
  }
}

}
