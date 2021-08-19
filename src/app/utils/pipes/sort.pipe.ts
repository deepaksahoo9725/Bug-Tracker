import { Pipe, PipeTransform } from '@angular/core';

interface Comparer {
    (t1 : any, t2 : any) : number
}

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform {

    private getComparer(attrName : string) : Comparer {
        return (t1 : any, t2 : any) => {
            if (t1[attrName] < t2[attrName]) return -1;
            if (t1[attrName] > t2[attrName]) return 1;
            return 0;
        }
    }

    private getDescComparer(comparer : Comparer) : Comparer{
        return (t1 : any, t2 : any) => {
            return comparer(t1, t2) * -1;
        }
    }

    transform(data: Array<any>, attrName : string, isDesc : boolean = false ): Array<any> {
        if (!data || !data.length || !attrName) return data;
        let comparer = this.getComparer(attrName);
        if (isDesc) {
            comparer = this.getDescComparer(comparer);
        }
        data.sort(comparer);
        return data;
    }
}