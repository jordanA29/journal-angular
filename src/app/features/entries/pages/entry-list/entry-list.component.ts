import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}
  ngOnInit() {
    this.refreshEntries();
  }

  addEntry = (entry: Entry) => {
    console.log(entry);

    this.entryService.createEntry(entry).subscribe(() => {
      this.refreshEntries();
    });
  };

  refreshEntries = () => {
    this.entryService.getEntries().subscribe((data: Entry[]) => {
      this.entries = data;
      console.log(this.entries);
    });
  };
}
