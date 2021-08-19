import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './models/bug';
import { BugOperationsService  } from './services/bugOperations.service'

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs: Bug[] = [];
  private currentBugId: number = 0;
  // descending:boolean=false;
  sortAttr : string = '';
  sortByDesc : boolean = false;

  constructor(private bugOperations: BugOperationsService) { }

  ngOnInit(): void {
    // this.bugs = this.bugOperations.getAll();
    this.bugOperations
      .getAll()
      .subscribe(bugs => this.bugs = bugs);
  }

  onBugRemoveClick(bugToRemove:Bug){
    // this.bugOperations.remove(bugToRemove)
    // this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    this.bugOperations
      .remove(bugToRemove)
      .subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id))
  }

  toggleCloseOnBugClick(bugToToggle : Bug){
    // this.bugOperations.toggle(bug);
    this.bugOperations.toggle(bugToToggle)
    .subscribe(toggledBug => {
      this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    });
    // this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
  }

  removeBugsInClosedState(){
  //   this.bugs = this.bugs.filter(( bug )=> {
  //     return bug.isClosed == false;
  // });
    this.bugs
        .filter(bug => bug.isClosed)
        .forEach((bug) => this.onBugRemoveClick(bug))
  }

  // /* returns the count of bugs in closed state */
  // refreshClosedCount(){   
  //   return this.bugs.filter(( bug )=> {
  //     return bug.isClosed == true;
  // }).length;
  // }

  onNewBugCreated(newBug:string){
    this.bugOperations.createNew(newBug)
    .subscribe(bug => this.bugs.push(bug));
  }





  // sort(option:string){

  //   if(option == "status"){
  //       let openedBugs: Bug[];
  //       let closedBugs: Bug[];
  //       //arr of closed bugs
  //       closedBugs = this.bugs.filter(( bug )=> {
  //         return bug.isClosed == true;
  //       });
        
  //       //arr of opened bugs
  //       openedBugs = this.bugs.filter(( bug )=> {
  //         return bug.isClosed == false;
  //       });

  //       if(this.descending){ 
  //         this.bugs = [...closedBugs,...openedBugs]; //list closed first and opened later
  //       }
  //       else{
  //         this.bugs = [...openedBugs,...closedBugs];
  //       }
  //   }
  // }

  // isDesc(option:string){
  //   this.descending = !this.descending;
  //   this.sort(option);
  // }
}
