import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bug } from '../../models/bug';
import { BugOperationsService } from '../../services/bugOperations.service';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  newBugName : string = '';

  @Output('addNewBug')
  created: EventEmitter<string> = new EventEmitter<string>();

  constructor(private bugOperations: BugOperationsService) { }

  ngOnInit(): void {
  }

  onBtnAddNewClick(newBugName : string){
    const newBug = this.bugOperations.createNew(newBugName);
    this.created.emit(newBugName);
    this.bugOperations.createNew(newBugName);
    // this.bugOperations
    //   .createNew(this.newBugName)
    //   .subscribe(newBug => this.created.emit(newBug));
  }

}
