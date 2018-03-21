/**
 * Created by kshitij on 21/3/18.
 */

import { NgModule } from '@angular/core';
import {UserService} from "./user.service";
import {InterviewComponent} from "./user.component";

@NgModule({
    imports: [],
    declarations: [InterviewComponent],
    exports: [InterviewComponent],
    providers: [UserService]
})
export class UserModule { }