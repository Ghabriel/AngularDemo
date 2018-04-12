import { Component, OnInit } from '@angular/core';

import { PostsService } from './../services/posts.service';
import { Post } from './../types';

enum LoadingStatus {
    NOT_LOADED,
    LOADING,
    LOADED
}

@Component({
    selector: 'app-rest',
    templateUrl: './rest.component.html',
    styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

    postLoadStatus: LoadingStatus;
    posts: Post[];

    // Permitir acesso à enum no html
    readonly LoadingStatus = LoadingStatus;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.postLoadStatus = LoadingStatus.NOT_LOADED;
        this.posts = [];
    }

    loadPosts(): void {
        this.postLoadStatus = LoadingStatus.LOADING;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
            this.postLoadStatus = LoadingStatus.LOADED;
        });
    }
}
