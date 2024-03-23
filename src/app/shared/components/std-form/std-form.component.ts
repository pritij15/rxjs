import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from '../../services/student.service';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
stdForm !: FormGroup;
editStd !: Istd;
isinEditMode : boolean = false;

  constructor(
    private _uuidService : UuidService,
    private _stdService : StudentService) { }

  ngOnInit(): void {
    this.createStdForm();
    this._stdService.editStdSub$
      .subscribe(std=>{
        console.log(std);
        this.editStd = std;
        this.isinEditMode = true;
        this.stdForm.patchValue(std)
      })
  }
  createStdForm(){
    this.stdForm = new FormGroup({
      fname : new FormControl(null,[Validators.required]),
      lname : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required])
    })
  }
onstdAdd(){
  if(this.stdForm.valid){
    let stdObj=
    {...this.stdForm.value,id: this._uuidService.uuid()}
    console.log(stdObj);
    this._stdService.addStd(stdObj)
    this.stdForm.reset();
  }
}
onUpdate(){
  let updatedObj = 
  {...this.stdForm.value, id : this.editStd.id};
  this.stdForm.reset();
  this.isinEditMode = false;
  this._stdService.updateStd(updatedObj)
}
}
