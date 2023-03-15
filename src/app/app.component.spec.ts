import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>
  const createComponent = createComponentFactory(AppComponent)
  beforeEach(() => {
    spectator = createComponent()
  });

  it('should create the app', () => {
    expect(spectator).toBeTruthy();
  });

  it(`should have as title 'journal-angular'`, () => {
    expect(spectator.component.title).toEqual('journal-angular');
  });
});
