import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrusinglepageComponent } from './frusinglepage.component';

describe('FrusinglepageComponent', () => {
  let component: FrusinglepageComponent;
  let fixture: ComponentFixture<FrusinglepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrusinglepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrusinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
