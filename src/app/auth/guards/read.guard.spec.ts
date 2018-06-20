import { TestBed, async, inject } from '@angular/core/testing';

import { ReadGuard } from './read.guard';

describe('ReadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadGuard]
    });
  });

  it('should ...', inject([ReadGuard], (guard: ReadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
