import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { Istd } from '../model/student';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
editStdSub$ : Subject<Istd> = new Subject<Istd>()

stdArr : Array<Istd>=[
    {
    fname : "Jhon",
    lname : "Doe",
    email : "jd@email.com",
    contact : 1234567890,
    id : "1"
    }
  ]
  constructor(private _snackbar : SnackbarService) { }

  fetchAllStd():Array<Istd>{
    return this.stdArr
  }
  addStd(stdObj : Istd){
    this.stdArr.unshift(stdObj);
    this._snackbar.openSnackBar(` ${stdObj.fname} is added Successfully !!`)

  }
  updateStd(updatedObj : Istd){
    for(let i = 0; i < this.stdArr.length; i++){
      if(this.stdArr[i].id === updatedObj.id){
        this.stdArr[i] = updatedObj;
        this._snackbar.openSnackBar(`${updatedObj.fname} is updated Successfully !!`)

        break;
      }
    }
  }
  removeStd(removeStd : Istd){
    let getIndex = this.stdArr.findIndex(std =>std.id === removeStd.id);
    this.stdArr.splice(getIndex,1);
    this._snackbar.openSnackBar(`${removeStd.fname} is Removed.`)

  }
}
