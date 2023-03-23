import { HttpErrorResponse } from '@angular/common/http';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator';
import { Entry } from '../models/entry';
import { EntryService } from './entry.service';

const entriesUrl = 'http://localhost:8080/api/entries';
describe('EntryService', () => {
  let spectator: SpectatorHttp<EntryService>;
  const createHttp = createHttpFactory(EntryService);

  beforeEach(() => (spectator = createHttp()));

  // => get a list of entries and verify entries is populated ?
  it('#getEntries should get a list of entries', (done) => {
    const expectedEntries: Entry[] = [
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' },
    ];
    spectator.service.getEntries().subscribe((data) => {
      expect(data).toEqual(expectedEntries);
      done();
    });
    const request = spectator.expectOne(entriesUrl, HttpMethod.GET);
    request.flush(expectedEntries);
  });

  it('#getEntries should return an empty object on error ', (done: DoneFn) => {
    const expectedEntires: Entry[] = [];
    spectator.service.getEntries().subscribe((data) => {
      expect(data).toEqual(expectedEntires);
      done();
    });
    const request = spectator.expectOne(entriesUrl, HttpMethod.GET);
    request.flush('error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });

  it('#getEntries should get an entry by id', (done: DoneFn) => {
    const expectedEntry: Entry = {
      id: 1,
      title: 'title1',
      content: 'content1',
    };

    spectator.service.getEntry(1).subscribe((data: Entry | undefined) => {
      expect(data).toEqual(expectedEntry);
      done();
    });

    const request = spectator.expectOne(entriesUrl + `/${1}`, HttpMethod.GET);

    request.flush(expectedEntry);
  });

  it('#getEntry should return undefined when error is caught', (done: DoneFn) => {
    spectator.service.getEntry(1).subscribe((data) => {
      expect(data).toBeUndefined();
      done();
    });

    const request = spectator.expectOne(entriesUrl + `/${1}`, HttpMethod.GET);

    request.flush('', { status: 404, statusText: 'Not Found' });
  });

  it('#getEntry should handle errors', () => {
    const errorMessage = 'Something went wrong';
    spyOn(spectator.service, 'handleError');
    spectator.service.getEntry(1).subscribe({
      error: (e) => {
        expect(spectator.service.handleError).toHaveBeenCalled();
        expect(e.message).toContain(errorMessage);
        expect(e.status).toEqual(500);
        expect(e.statusText).toContain('Internal server error');
      },
    });
    const req = spectator.expectOne(entriesUrl + `/${1}`, HttpMethod.GET);

    req.flush(
      { error: errorMessage },
      { status: 500, statusText: 'Internal Server Error' }
    );
  });

  it('#createEntry should return the created object when creating', () => {
    const newEntry: Entry = { title: 'Test', content: 'Test' };
    spectator.service.create(newEntry).subscribe((data) => {
      expect(data).toEqual(newEntry);
    });
    const req = spectator.expectOne(entriesUrl, HttpMethod.POST);
    expect(req.request.body).toEqual(newEntry);
    req.flush(newEntry);
  });

  it('#createEntry should handle errors when creating an entry', () => {
    const newEntry: Entry = { title: 'Test', content: 'Test' };
    const errorMessage = 'Something went wrong';
    spyOn(spectator.service, 'handleError');
    spectator.service.create(newEntry).subscribe({
      error: (e) => {
        expect(spectator.service.handleError).toHaveBeenCalled();
        expect(e.message).toContain(errorMessage);
        expect(e.status).toEqual(500);
        expect(e.statusText).toContain('Internal server error');
      },
    });
    const req = spectator.expectOne(entriesUrl, HttpMethod.POST);
    req.flush(
      { error: errorMessage },
      { status: 500, statusText: 'Internal Server Error' }
    );
  });

  // it('should delete an entry', () => {
  //   spectator.service.delete(1).subscribe();
  //   spectator.expectOne\
  //     'http://localhost:8080/api/entries/1',
  //     HttpMethod.DELETE
  //   );
  // });

  // it('should update an entry', () => {
  //   const entry: Entry = { id: 1, title: 'Test', content: 'Test' };
  //   spectator.service.update(entry).subscribe();
  //   const req = spectator.expectOne(
  //     'http://localhost:8080/api/entries/1',
  //     HttpMethod.PUT
  //   );
  //   expect(req.request.body).toEqual(entry);
  // });
});
