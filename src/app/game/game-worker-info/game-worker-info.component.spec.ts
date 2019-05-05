import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWorkerInfoComponent } from './game-worker-info.component';

describe('GameWorkerInfoComponent', () => {
  let component: GameWorkerInfoComponent;
  let fixture: ComponentFixture<GameWorkerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWorkerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWorkerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
