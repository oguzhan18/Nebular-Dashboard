import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenListComponent } from './screen-list.component';

describe('ScreenListComponent', () => {
  let component: ScreenListComponent;
  let fixture: ComponentFixture<ScreenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
