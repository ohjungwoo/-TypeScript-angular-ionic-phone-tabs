import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CoreProviders } from './core-providers';
import 'rxjs/add/operator/map';

import { GetPostsRequest } from '../message/posts-request';

@Injectable()
export class PostsProviders {

    constructor(private http: Http, private coreProviders: CoreProviders) { }

	getPosts(request: GetPostsRequest): Observable<any> {
        return this.http.get(this.coreProviders.baseUrl + '/posts', { params: request })
			.map(res => res.json());
	}

    getPostsDetail(postId: string) : Observable<any>{
        return this.http.get(this.coreProviders.baseUrl + '/posts/' + postId)
			.map(res => res.json());
    }

    getPostComments(postId: string) : Observable<any>{
        return this.http.get(this.coreProviders.baseUrl + '/posts/' + postId + '/comments')
			.map(res => res.json());
    }
}
