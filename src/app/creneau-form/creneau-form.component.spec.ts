import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauFormComponent } from './creneau-form.component';

describe('CreneauFormComponent', () => {
  let component: CreneauFormComponent;
  let fixture: ComponentFixture<CreneauFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreneauFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
