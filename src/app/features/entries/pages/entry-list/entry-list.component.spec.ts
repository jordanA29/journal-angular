import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';
import { of } from 'rxjs';
import { EntriesModule } from '../../entries.module';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry.service';
import { EntryListComponent } from './entry-list.component';

describe('EntryListComponent', () => {
  const mockedEntries: Entry[] = [
    {
      id: 1,
      title: 'Learn',
      content: 'Learn at leat one thing a day',
    } as Entry,
    {
      id: 2,
      title: 'Pratice',
      content: 'Practice what you have learned',
    } as Entry,
  ];
  let spectator: Spectator<EntryListComponent>;
  const createComponent = createComponentFactory({
    component: EntryListComponent,
    imports: [EntriesModule],
    providers: [
      mockProvider(EntryService, { getEntries: () => of(mockedEntries) }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should display a list of seven entries', () => {
    expect(spectator.query('[data-cy="entry-list-skeleton"]')).toBeTruthy();
    expect(spectator.queryAll('[data-cy="entry-list-skeleton"]')).toHaveLength(
      7
    );
  });
});
