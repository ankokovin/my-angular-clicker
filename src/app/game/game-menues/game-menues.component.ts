import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameState } from '../../data-classes/game-state';

@Component({
  selector: 'app-game-menues',
  templateUrl: './game-menues.component.html',
  styleUrls: ['./game-menues.component.sass']
})
export class GameMenuesComponent implements OnInit {


  @Input() gameState : GameState;

  @Output() onBought = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }


  tryBought(id:number){
    this.onBought.emit(id);
  }
}
