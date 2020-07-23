import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceResearchComponent } from './annonce-research.component';

describe('AnnonceResearchComponent', () => {
  let component: AnnonceResearchComponent;
  let fixture: ComponentFixture<AnnonceResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
