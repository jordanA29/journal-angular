import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator'
import { of } from 'rxjs';
import { EntryService } from '../../services/entry.service';
import { EntryListComponent } from './entry-list.component';

describe('EntryListComponent', () => {
  let spectator: Spectator<EntryListComponent>
  const createComponent = createComponentFactory({
    component: EntryListComponent,
    providers: [mockProvider(EntryService, {
      getAll: () => of([])
    })]
  })

  beforeEach(() => {
    spectator = createComponent()
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
