import { Component, Input } from '@angular/core';
import { Entry } from '../../models/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  @Input() entry: Entry = {} as Entry;
}
