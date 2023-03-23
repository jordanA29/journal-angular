import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Entry } from '../models/entry';
@Injectable()
export class EntryService {
  private entriesUrl: string;
  constructor(private http: HttpClient) {
    // todo make url global
    this.entriesUrl = 'http://localhost:8080/api/entries';
  }

  public getEntries(): Observable<Entry[]> {
    return this.http
      .get<Entry[]>(this.entriesUrl)
      .pipe(catchError(() => of<Entry[]>([])));
  }

  public getEntry(id: number): Observable<Entry | undefined> {
    return this.http.get<Entry>(`${this.entriesUrl}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err);
        return of(undefined);
      })
    );
  }

  public create(entry: Entry): Observable<Entry | undefined> {
    return this.http.post<Entry>(this.entriesUrl, entry).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err);
        return of(undefined);
      })
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.entriesUrl}/${id}`);
  }

  public update(entry: Entry): Observable<Entry> {
    return this.http.put<Entry>(`${this.entriesUrl}/${entry.id}`, entry);
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
