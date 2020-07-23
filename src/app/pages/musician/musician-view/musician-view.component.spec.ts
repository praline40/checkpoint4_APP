import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianViewComponent } from './musician-view.component';

describe('MusicianViewComponent', () => {
  let component: MusicianViewComponent;
  let fixture: ComponentFixture<MusicianViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
