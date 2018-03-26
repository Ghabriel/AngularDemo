import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';
import { Post } from './../types';

@Injectable()
export class PostsService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
    }

    private post(path: string, body: any): Observable<any> {
        return this.http.post(this.url(path), body);
    }

    private get(path: string): Observable<any> {
        return this.http.get(this.url(path));
    }

    private put(path: string, body: any): Observable<any> {
        return this.http.put(this.url(path), body);
    }

    private delete(path: string): Observable<any> {
        return this.http.delete(this.url(path));
    }

    private url(path: string): string {
        return environment.api.host + path;
    }

}
