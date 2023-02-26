import { Component } from '@angular/core';
import { Entry } from '../model/entry';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.sass'],
})
export class EntryComponent {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}
  ngOnInit() {
    this.entryService
      .findAll()
      .subscribe((data: Entry[]) => (this.entries = data));
    console.log(this.entries);
  }
}
