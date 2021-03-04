import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent implements OnInit {
  repos = [];
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe(
      (data: Array<any>) => this.initRepos(data),
      error => console.log(error)
    );
  }

  initRepos(data: Array<any>): void {
    data.forEach(obj => {
      if (obj.hasOwnProperty('full_name')){
        this.repos.push(obj.full_name);
      }
    });
    console.log(this.repos);
  }
}
