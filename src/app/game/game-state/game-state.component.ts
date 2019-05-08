import { Component, OnInit } from '@angular/core';

import { GameLoopService } from '../../game-loop.service';


@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.sass']
})
export class GameStateComponent implements OnInit {

  constructor(private gameLoopsService: GameLoopService) { }

  ngOnInit() {
  }

  getEnergy(){
    return this.gameLoopsService.gameState.energy;
  }

  getPassiveIncome(){
    return this.gameLoopsService.getPassiveIncome();
  }

  getClickIncome(){
    return this.gameLoopsService.getClickIncome();
  }

  getValue(){
    return this.gameLoopsService.gameState.value;
  }

  getNextEnergy(){
    return this.gameLoopsService.gameState.needValue;
  }
}
