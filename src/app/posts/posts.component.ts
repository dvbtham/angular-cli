import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    }
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe(respone => {
      this.posts.splice(0, 0, post);
      post['id'] = respone.json().id;
    });
  }

  updatePost(post: any) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(respone => {
        console.log(respone.json());
      });
  }

  deletePost(post: any) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(respone => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
