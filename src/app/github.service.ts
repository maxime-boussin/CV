import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GithubService {
  reposUrl = 'https://api.github.com/users/maxime-boussin/repos';

  constructor(private http: HttpClient) {
  }

  private static handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Un problème est survenu, veuillez réessayer plus tard.');
  }

  getRepos(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.reposUrl)
      .pipe(retry(3), catchError(GithubService.handleError));
  }
}
