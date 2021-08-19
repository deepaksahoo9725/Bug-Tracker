import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(bugName : string, textLength : number = 30): string {
    return bugName.length >= textLength ? bugName.substr(0,textLength) + '...' : bugName;
  }

}
