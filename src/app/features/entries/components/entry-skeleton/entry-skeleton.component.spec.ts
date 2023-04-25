import { EntrySkeletonComponent } from './entry-skeleton.component';
import { EntriesModule } from '../../entries.module';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';

describe('EntrySkeletonComponent', () => {
  let spectator: Spectator<EntrySkeletonComponent>;
  const createComponent = createComponentFactory({
    component: EntrySkeletonComponent,
    imports: [EntriesModule],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should contain a button', () => {
    expect(spectator.query('[data-cy="add-btn"]')).toBeVisible();
  });
  it('should call openDialog method when add button is clicked', () => {
    spyOn(spectator.component, 'openAddEntryDialog');
    spectator.click('[data-cy="add-btn"]');
    expect(spectator.component.openAddEntryDialog).toHaveBeenCalled();
  });
});
