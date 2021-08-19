import { NgModule } from "@angular/core";
import { MomentPipe } from "./pipes/moment.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from './pipes/trim-text.pipe';

@NgModule({
    declarations: [
        MomentPipe,
        TrimTextPipe,
        SortPipe
    ],
    exports: [
        MomentPipe,
        TrimTextPipe,
        SortPipe
    ]
})
export class UtilsModule{

}