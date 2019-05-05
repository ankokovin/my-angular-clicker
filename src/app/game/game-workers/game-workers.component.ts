import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PassiveIncomer } from '../../data-classes/passive-incomer';



@Component({
  selector: 'app-game-workers',
  templateUrl: './game-workers.component.html',
  styleUrls: ['./game-workers.component.sass']
})
export class GameWorkersComponent implements OnInit {

  @Input() workers : PassiveIncomer[]
  @Output() onBought = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  tryBought(id:number){
    this.onBought.emit(id);
  }
}
