import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";

@Injectable({
    providedIn: 'root'
})
export class BugStorageService{
    private currentBugId: number = 0;
    private storage: Storage = window.localStorage;

    getAll():Bug[] {
        let bugs : Bug[] = [];
        for (let i = 0; i < this.storage.length; i++){
            let key = this.storage.key(i) ?? ''
            let rawData = this.storage.getItem(key) ?? ''
            let bug : Bug = JSON.parse(rawData);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
            bugs.push(bug);
        }
        return bugs;
    }

    save(bug:Bug): Bug {
        if(bug.id === 0){
            bug.id = ++this.currentBugId;
        }
        this.storage.setItem(bug.id.toString(),JSON.stringify(bug));
        return bug;
    }

    remove(bug:Bug){
        this.storage.removeItem(bug.id.toString());
    }
}