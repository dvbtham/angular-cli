import { AppError } from './../common/app-error';
import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    this.service.getAll()
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
    this.service.create(post).subscribe(respone => {
      this.posts.splice(0, 0, post);
      post['id'] = respone.json().id;
    }, (error: AppError) => {
      if (error instanceof BadRequestError) {
        //  this.form.setErrors(error.originalError);
      }
      else
        throw error;
    });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(respone => {
        console.log(respone.json());
      });
  }

  deletePost(post: any) {
    this.service.delete(post.id)
      .subscribe(respone => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted.');
        else throw error;
      });
  }

}
