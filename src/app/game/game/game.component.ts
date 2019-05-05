import { Component, OnInit, Input, Output } from '@angular/core';

import { GameState } from '../../data-classes/game-state';
import { PassiveIncomer } from '../../data-classes/passive-incomer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  gameState: GameState;
  constructor() { 
    //get gameState from some service
    this.gameState = new GameState( 
      [
        new PassiveIncomer(1,"me",1,0,10),
        new PassiveIncomer(2,"also me",10,0,200)
      ], 0
      );
  }

  onClick(v:any){
    this.gameState.click();
  }

  ngOnInit() {
    this.gameState.start();
  }

  tryBuy(id:number){
    this.gameState.buy(id);
  }

}
