import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

export interface Repository {
  name: string;
  last_modified: Date;
  size: number;
  url: string;
}

@Component({
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent implements OnInit {
  repos: Repository[] = [];
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe(
      (data: Array<any>) => this.initRepos(data),
      error => console.log(error)
    );
  }

  initRepos(data: Array<any>): void {
    data.forEach(obj => {
      const repo: Repository = {
        name: obj.full_name.substr(obj.full_name.indexOf('/') + 1),
        last_modified: new Date(obj.updated_at),
        size: obj.size,
        url: obj.html_url
      };
      this.repos.push(repo);
    });
    this.repos.sort((a: Repository, b: Repository) => {
      return b.last_modified.getTime() - a.last_modified.getTime();
    });
  }

  redirect(url: string): void {
    window.open(url, '_blank');
  }

  convertSize(size: number): string {
    return (size > 1000 ? (size > 100000 ? Math.round(size / 1000000) + 'Go' : Math.round(size / 1000) + 'Mo') : size + 'Ko');
  }
}
