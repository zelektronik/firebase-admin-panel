import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaAddComponent } from './schema-add.component';

describe('SchemaAddComponent', () => {
  let component: SchemaAddComponent;
  let fixture: ComponentFixture<SchemaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
