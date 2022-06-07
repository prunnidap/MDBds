import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreformComponent } from './membreform.component';

describe('MembreformComponent', () => {
  let component: MembreformComponent;
  let fixture: ComponentFixture<MembreformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
