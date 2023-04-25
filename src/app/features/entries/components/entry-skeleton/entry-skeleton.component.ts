import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEntryDialogComponent } from '../../pages/add-entry-dialog/add-entry-dialog.component';

@Component({
  selector: 'app-entry-skeleton',
  templateUrl: './entry-skeleton.component.html',
  styleUrls: ['./entry-skeleton.component.scss'],
})
export class EntrySkeletonComponent {
  constructor(private dialog: MatDialog) {}

  openAddEntryDialog = () => {
    this.dialog.open(AddEntryDialogComponent, {
      height: '400px',
      width: '600px',
    });
  };
}
