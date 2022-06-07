import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagemembreComponent } from './pagemembre.component';

describe('PagemembreComponent', () => {
  let component: PagemembreComponent;
  let fixture: ComponentFixture<PagemembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagemembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagemembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
