import { async, TestBed } from '@angular/core/testing';
import { GisJkhApiClientRestModule } from './gis-jkh-api-client-rest.module';

describe('GisJkhApiClientRestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GisJkhApiClientRestModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GisJkhApiClientRestModule).toBeDefined();
  });
});
