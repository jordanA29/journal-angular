import { Component } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.sass'],
})
export class EntryListComponent {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}
  ngOnInit() {
    this.entryService
      .getEntries()
      .subscribe((data: Entry[]) => (this.entries = data));
  }
}
