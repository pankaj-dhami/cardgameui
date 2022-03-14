import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";


export class DataService<T> {

  constructor(private url: any, private httpClient: HttpClient) { }

  getAll(param: string): Observable<T[]> {

    return this.httpClient.get<T[]>(this.url + param).pipe(catchError(this.errorHandler));

  }
  create(resource: T): Observable<T> {
    return this.httpClient.post<T>(this.url, resource)
      .pipe(catchError(this.errorHandler));
  }

  update(resource: T, id: number): Observable<T> {
    return this.httpClient.patch<T>(this.url + '/' + id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    if (error.status === 404)
      return throwError(new NotFoundError(error));
    else if (error.status === 401) {
      return throwError(new UnauthorizedError(error));
    }
    else
      return throwError(new AppError(error));
  }
}

export class AppError {
  constructor(public originalError?: any) {

  }
}

export class NotFoundError extends AppError {

}
export class UnauthorizedError extends AppError {

}
