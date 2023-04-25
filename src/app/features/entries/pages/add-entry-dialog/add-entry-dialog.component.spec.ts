import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EntriesModule } from '../../entries.module';

import { AddEntryDialogComponent } from './add-entry-dialog.component';

describe('AddEntryDialogComponent', () => {
  let spectator: Spectator<AddEntryDialogComponent>;
  const createComponent = createComponentFactory({
    component: AddEntryDialogComponent,
    imports: [EntriesModule],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should display a form with two inputs', () => {
    expect(spectator.query('form')).toBeTruthy();
    expect(spectator.queryAll('input')).toHaveLength(2);
  });
});
