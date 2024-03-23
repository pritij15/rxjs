import { Injectable, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';
import { Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService{

  todoArray: Array<Itodo> = [
    {
      todoItem : "Angular",
      todoId : "123"
    }
  ]

  todoSubject$ : Subject<Itodo> = new Subject()
  editAndUpdateTodoSub$ : Subject<Itodo> = new Subject();

  constructor(private _snackBarService : SnackbarService) {
    // this.todoSubject$
    // .subscribe(res =>{
    //   console.log(res);
    //   this.todoArray.push(res)
    //   console.log(this.todoArray);
    // })
   }

   fetchAllTodos(): Array<Itodo>{
    return this.todoArray
   }

   addTodo(todo : Itodo){
        // API call to update todo object
         this.todoArray.push(todo);
         this._snackBarService.openSnackBar(` ${todo.todoItem} is added Successfully !!`)

   }
   updateTodo(updatedTodo : Itodo){
    // API call to update todo object
    for(let i = 0; i < this.todoArray.length; i++){
      if(this.todoArray[i].todoId === updatedTodo.todoId){
        this.todoArray[i] = updatedTodo;
        this._snackBarService.openSnackBar(`${updatedTodo.todoItem} is updated Successfully !!`)

      }
    }
  }

  removeTodo(todo : Itodo){
    //API call to remove todo items
    let getIndex = this.todoArray.findIndex(todoItem => todoItem.todoId === todo.todoId);
    this.todoArray.splice(getIndex,1);
    this._snackBarService.openSnackBar
   (`${todo.todoItem} is Removed.`)

  }
  
}
