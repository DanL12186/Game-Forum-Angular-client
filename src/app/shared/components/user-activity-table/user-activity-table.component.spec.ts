import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityTableComponent } from './user-activity-table.component';

describe('UserActivityTableComponent', () => {
  let component: UserActivityTableComponent;
  let fixture: ComponentFixture<UserActivityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActivityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
