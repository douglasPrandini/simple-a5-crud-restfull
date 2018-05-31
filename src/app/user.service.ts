import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  //private users : User[];

  private userUrl = 'api/users';
  constructor(private http: HttpClient) { }

  //Mock Metods, need to be refactor when get new values;
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(users => {
        this.log(`fetched users`);
        //users = users.concat(this.users);
      }),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUSer id=${id}`))
    );
  }

  addNewUser(user : User) : Observable<User> {
    let body = JSON.parse(JSON.stringify(user));
    
    console.log('body');
    console.log(body);
    console.log('user');
    console.log(user);

    return this.http.post<User>(this.userUrl, body as User, httpOptions).pipe(
      tap((user: User) => {
        this.log(`added hero w/ id=${user.id}`)
      }),
        catchError(this.handleError<User>('addNewUser'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
  private log(message: string) {
    //TODO log, send msg to service log;
    console.log(message);
  }

}
