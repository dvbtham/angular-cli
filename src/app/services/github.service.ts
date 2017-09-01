import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class GitHubService extends DataService{
    constructor(http: Http){
        super('https://api.github.com/users/dvbtham/followers', http);

    }
}