import { ActivatedRoute } from '@angular/router';
import { GitHubService } from './../../services/github.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})

export class GithubFollowersComponent implements OnInit {

  followers: any[];
  isLoading = true;

  constructor(private route: ActivatedRoute, private service: GitHubService) { }

  ngOnInit() {
    //Subscribing to Multiple Observables
    //switchMap
    
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getAll()
      })
      .subscribe(followers => {
        this.followers = followers;
        this.isLoading = false;
      });




  }

}
