import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleoneComponent } from './singleone.component';

describe('SingleoneComponent', () => {
  let component: SingleoneComponent;
  let fixture: ComponentFixture<SingleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
