import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";



@Injectable({
    providedIn : 'root'
})
export class BugApi{
    constructor(private http : HttpClient){
    }

    getAll() : Observable<Bug[]> { 
        return this.http
            .get<Bug[]>('http://localhost:3000/bugs')
    }

    save(bugData : Bug) : Observable<Bug> {
        if (bugData.id === 0){
            return this.http
                .post<Bug>('http://localhost:3000/bugs', bugData)
        } else {
            return this.http
                .put<Bug>(`http://localhost:3000/bugs/${bugData.id}`, bugData)
        }
    }

    remove(bugData : Bug) : Observable<any>{
        return this.http
            .delete<any>(`http://localhost:3000/bugs/${bugData.id}`)
    }
} 