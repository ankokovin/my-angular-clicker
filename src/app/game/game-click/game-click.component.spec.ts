import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameClickComponent } from './game-click.component';

describe('GameClickComponent', () => {
  let component: GameClickComponent;
  let fixture: ComponentFixture<GameClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
