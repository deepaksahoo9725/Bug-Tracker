import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Bug } from '../../models/bug';

@Component({
  selector: 'app-bug-stats',
  templateUrl: './bug-stats.component.html',
  styleUrls: ['./bug-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent implements OnInit {
  @Input('data')
  bugs: Bug[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentTime():Date{
    return new Date();
  }

  // refreshClosedCount(){   
  //   return this.bugs.filter(( bug )=> {
  //     return bug.isClosed == true;
  // }).length;
  // }

}
