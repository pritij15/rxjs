import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
stdArr !: Array<Istd>

  constructor(private _stdService : StudentService) { }

  
  ngOnInit(): void {
   this.stdArr = this._stdService.fetchAllStd();
  }

  onStdEdit(std : Istd){
    console.log(std);
    this._stdService.editStdSub$.next(std)
  }
  onStdDelete(std : Istd){
    this._stdService.removeStd(std)
  }

}
