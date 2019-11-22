import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardTableComponent } from './game-card-table.component';

describe('GameCardTableComponent', () => {
  let component: GameCardTableComponent;
  let fixture: ComponentFixture<GameCardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
