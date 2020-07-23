import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertResultComponent } from './concert-result.component';

describe('ConcertResultComponent', () => {
  let component: ConcertResultComponent;
  let fixture: ComponentFixture<ConcertResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
