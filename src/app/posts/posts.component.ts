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
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

  posts: any[];


  constructor(private service: PostService) {

  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.posts.splice(0, 0, post);

    this.service.create(post).subscribe(posts => {
      post['id'] = posts.id;
    }, (error: AppError) => {
      this.posts.splice(0, 1);
      if (error instanceof BadRequestError) {        
        //  this.form.setErrors(error.originalError);
      }
      else
        throw error;
    });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id)
      .subscribe(null, (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('This post has already been deleted.');
        else throw error;
      });
  }

}
