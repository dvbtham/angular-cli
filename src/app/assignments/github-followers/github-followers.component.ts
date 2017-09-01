import { GitHubService } from './../../services/github.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})

export class GithubFollowersComponent implements OnInit {

  followers: any[];
  isLoading = true;

  constructor(private service: GitHubService) { }

  ngOnInit() {
    this.service.getAll().subscribe((followers) => {
      this.followers = followers;
      this.isLoading = false;
    });
   
  }

}
