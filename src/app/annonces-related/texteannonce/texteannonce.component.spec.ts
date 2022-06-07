import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteannonceComponent } from './texteannonce.component';

describe('TexteannonceComponent', () => {
  let component: TexteannonceComponent;
  let fixture: ComponentFixture<TexteannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexteannonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
