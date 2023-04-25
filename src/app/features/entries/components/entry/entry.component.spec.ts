import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EntriesModule } from '../../entries.module';

import { EntryComponent } from './entry.component';

describe('EntryComponent', () => {
  let spectator: Spectator<EntryComponent>;
  const createComponent = createComponentFactory({
    component: EntryComponent,
    imports: [EntriesModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
