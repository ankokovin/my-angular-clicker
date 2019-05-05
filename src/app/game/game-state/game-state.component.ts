import { Component, OnInit, Input } from '@angular/core';

import { GameState } from '../../data-classes/game-state';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.sass']
})
export class GameStateComponent implements OnInit {

  @Input() gameState : GameState;

  constructor() { }

  ngOnInit() {
  }

}
