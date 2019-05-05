import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWorkersComponent } from './game-workers.component';

describe('GameWorkersComponent', () => {
  let component: GameWorkersComponent;
  let fixture: ComponentFixture<GameWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
