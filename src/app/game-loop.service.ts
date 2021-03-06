import { Injectable } from '@angular/core';

import { GameState } from './data-classes/game-state';
import { PassiveIncomer } from './data-classes/passive-incomer';



@Injectable({
  providedIn: 'root'
})
export class GameLoopService {

  progress : number;

  constructor() {}

  gameState : GameState;

  newGame(){
    this.gameState = new GameState( 
      [
        new PassiveIncomer(1,"me",1,0,10),
        new PassiveIncomer(2,"also me",10,0,200)
      ], 1, 0
      );
    this.start();
  }

  getGameState() {
    return this.gameState;
  }


  getPassiveIncome() {
    return this.gameState.workers.map(function (x) {
      return x.getInc();
    }).reduce(function (sum, current) {
      return sum + current;
    });
  }

  getClickIncome() {
    //TODO
    return 1;
  }


  click() {
    this.inc(this.getClickIncome()); 
  }


  inc(value:number){
    let nval = this.gameState.value + value;
    while(this.gameState.needValue<=nval){
      this.gameState.energy += 1;
      nval -= this.gameState.needValue;
      this.incNeedVal();
    }
    this.gameState.value = nval;
    this.progress = this.gameState.value*100/this.gameState.needValue;
  }

  incNeedVal(){
    this.gameState.needValue += 1;
  }

  can_buy(id: number) {
    return this.gameState.workers.find(
      function (x) {
        return x.id == id;
      }
    ).getAddCost() <= this.gameState.energy;
  }


  buy(id: number) {
    console.log(id);
    if (this.can_buy(id)) {
      this.gameState.energy -= this.gameState.workers.find(
        function (x) {
          return x.id == id;
        }
      ).buy();
    }
  }

  tick() {
    this.inc(this.getPassiveIncome());
  }

  start() {
    var that = this;
    setInterval(function () {
      that.tick();
    }, 1000);
  }

  getWorkers(): PassiveIncomer[] {
    return this.gameState.workers;
  }
}
