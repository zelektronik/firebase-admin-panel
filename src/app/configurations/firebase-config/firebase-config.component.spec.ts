import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseConfigComponent } from './firebase-config.component';

describe('FirebaseConfigComponent', () => {
  let component: FirebaseConfigComponent;
  let fixture: ComponentFixture<FirebaseConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
