import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAddComponent } from './screen-add.component';

describe('ScreenAddComponent', () => {
  let component: ScreenAddComponent;
  let fixture: ComponentFixture<ScreenAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
