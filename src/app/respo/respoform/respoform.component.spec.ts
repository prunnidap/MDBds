import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoformComponent } from './respoform.component';

describe('RespoformComponent', () => {
  let component: RespoformComponent;
  let fixture: ComponentFixture<RespoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
