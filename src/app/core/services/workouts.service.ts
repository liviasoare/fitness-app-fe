import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  SERVER_URL = environment.server;
  API_WORKOUT = '/workout';

  constructor(private http: HttpClient, private router: Router) {}

  public getWorkouts(){
    return this.http.get<any>(this.SERVER_URL + this.API_WORKOUT).pipe(map((result:any) => {
      return result;
    }), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError(() => {
        console.log(error);
    });
}
}
