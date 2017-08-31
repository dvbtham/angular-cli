import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  posts: any[];
  

  constructor(private service: PostService) {
    
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    }
    input.value = '';
    this.service.createPost(post).subscribe(respone => {
      this.posts.splice(0, 0, post);
      post['id'] = respone.json().id;
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe(respone => {
        console.log(respone.json());
      });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(respone => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
