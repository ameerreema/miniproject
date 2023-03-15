import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlosinglepageComponent } from './flosinglepage.component';

describe('FlosinglepageComponent', () => {
  let component: FlosinglepageComponent;
  let fixture: ComponentFixture<FlosinglepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlosinglepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlosinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
