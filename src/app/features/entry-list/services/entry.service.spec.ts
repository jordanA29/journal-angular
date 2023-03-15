import { createHttpFactory, HttpMethod, SpectatorHttp } from "@ngneat/spectator";
import { EntryService } from "./entry.service";
describe('EntryService', () => {
  let spectator: SpectatorHttp<EntryService>;
  const createHttp = createHttpFactory(EntryService);
  beforeEach(() => spectator = createHttp());
  it('should get a list of entries', () => {
    spectator.service.getAll().subscribe();
    spectator.expectOne('api/entries', HttpMethod.GET);
  })
})