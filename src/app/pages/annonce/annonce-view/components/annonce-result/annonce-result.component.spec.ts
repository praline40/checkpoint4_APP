import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceResultComponent } from './annonce-result.component';

describe('AnnonceResultComponent', () => {
  let component: AnnonceResultComponent;
  let fixture: ComponentFixture<AnnonceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
