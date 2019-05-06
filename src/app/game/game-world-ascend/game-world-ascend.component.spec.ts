import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWorldAscendComponent } from './game-world-ascend.component';

describe('GameWorldAscendComponent', () => {
  let component: GameWorldAscendComponent;
  let fixture: ComponentFixture<GameWorldAscendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWorldAscendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWorldAscendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
