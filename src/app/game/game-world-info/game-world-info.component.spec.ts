import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWorldInfoComponent } from './game-world-info.component';

describe('GameWorldInfoComponent', () => {
  let component: GameWorldInfoComponent;
  let fixture: ComponentFixture<GameWorldInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWorldInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWorldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
