import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMenuesComponent } from './game-menues.component';

describe('GameMenuesComponent', () => {
  let component: GameMenuesComponent;
  let fixture: ComponentFixture<GameMenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
