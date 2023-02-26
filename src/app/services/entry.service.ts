import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../model/entry';

@Injectable()
export class EntryService {
  private entriesUrl: string;

  constructor(private http: HttpClient) {
    // todo make url global
    this.entriesUrl = 'http://localhost:8080/api/entries';
  }

  public findAll(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.entriesUrl);
  }
}
