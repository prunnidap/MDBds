import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerespoComponent } from './pagerespo.component';

describe('PagerespoComponent', () => {
  let component: PagerespoComponent;
  let fixture: ComponentFixture<PagerespoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerespoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerespoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
