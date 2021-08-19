import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bug-tracker-app';

  constructor(private http: HttpClient){

  }

  onDummyClick(){
    this.http
    .get('http://localhost:3000/bugs')
    .subscribe(bugs => console.table(bugs))
  }
}
