import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";
import { BugApi } from "./bugApi.service";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn: "root"
})
export class BugOperationsService{
   
    constructor(private bugApi: BugApi){

    }

    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    createNew(newBugName:string) : Observable<Bug> {
        const newBug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBug)
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bugToRemove : Bug):Observable<any> {
        return this.bugApi.remove(bugToRemove);
    }
}
    