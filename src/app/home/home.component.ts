import { Component, OnInit } from '@angular/core';

import { PostsService } from './../services/posts.service';
import { Post } from './../types';

enum LoadingStatus {
    NOT_LOADED,
    LOADING,
    LOADED
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private postLoadStatus: LoadingStatus;
    private posts: Post[];

    // Permitir acesso à enum no html
    private readonly LoadingStatus = LoadingStatus;

    constructor(private postsService: PostsService) {
        this.postLoadStatus = LoadingStatus.NOT_LOADED;
        this.posts = [];
    }

    ngOnInit() { }

    loadPosts(): void {
        this.postLoadStatus = LoadingStatus.LOADING;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
            this.postLoadStatus = LoadingStatus.LOADED;
        });
    }
}
