import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { USERS } from './mock-user';
import { UserService } from './user.service';

@Component({
    selector: 'my-users',
    templateUrl: './users.component.html',
    styleUrls: [ './users.component.css' ]
})
export class InterviewComponent implements OnInit {
    users: User[] = USERS;

    constructor(
        private router: Router,
        private userService: UserService) { }


    findAllUser(): void {
        this.userService.findAll().subscribe(users => this.users = users)
            .catch(alert('Error'));
    }

    findUser(userId): void {
        this.userService.find(userId).subscribe(user => this.gotoDetail(user));
    }

    editUser(user:any): void {
        if (user.isArray()) {
            var ids = [];
            for (var i = 0; i < user.length; i++) {
                ids.push(user[i].id);
            }
            this.userService.edit(ids).subscribe(data => {
                for (var i = 0; i < this.users.length; i++) {
                    if (this.users[i].id === data.id) {
                        this.users[i] === data;
                    }
                }
                alert('User Updated');
            }).catch(alert('Couldnt update user'));
        }
        else {
            this.userService.edit(user.id).subscribe(data => {
                this.users[this.users.indexOf(user.id)] = data;
                alert('User Saved');
            }).catch(alert('Couldnt save'));
        }
    };

    removeUser(userId:any):void {
        this.userService.remove(userId).subscribe(data => {
            var index = this.users.indexOf(userId);
            this.users.splice(index, 1);
            alert('User Removed');
        }).catch(alert('Couldnt remove'));
    };


    gotoDetail(user): void {
        this.router.navigate(['/detail', user.id]);
    }
}