import { TestBed }       from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Home', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      HomeComponent
    ]
  }));

  it ('HomeComponent should be defined', () => {
    TestBed.compileComponents().then(() => {
      expect(HomeComponent).toBeDefined();
    });
  });
});
