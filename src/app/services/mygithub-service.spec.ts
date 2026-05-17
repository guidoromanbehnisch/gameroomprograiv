import { TestBed } from '@angular/core/testing';

import { MygithubService } from './mygithub-service';

describe('MygithubService', () => {
  let service: MygithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
