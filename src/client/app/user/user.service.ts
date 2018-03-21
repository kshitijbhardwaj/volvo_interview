import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

    private findURL = '/find';
    private findAllURL = '/findall';
    private editURL = '/edit';
    private removeURL = '/remove';

    constructor(private http: Http) { }

    findAll(): Observable<any> {
        let headers = new Headers();
        return this.http.get(this.findAllURL, { headers: headers })
            .map((data:any) => {
                return data.json();
            }).catch((error:any) => {
                return error.json();
            })
    };

    find(userId:any): Observable<any> {
        let headers = new Headers();
        return this.http.get(this.findURL)
            .map((data:any) => {
                return data.json();
            }).catch((error:any) => {
                return error.json();
            })
    };

    edit(ids:any):Observable<any> {

        return this.http.post(this.editURL, ids)
            .map((data:any) => {
                return data.json();
            }).catch((error:any) => {
                return error.json();
            })
    };

    remove(userId:any):Observable<any> {
        return this.http.post(this.removeURL, userId)
            .map((data: any) => {
                return data.json();
            }).catch((error: any) => {
                return error.json();
            })
    }



}
