import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { PassiveIncomer } from '../../data-classes/passive-incomer';


@Component({
  selector: 'app-game-worker-info',
  templateUrl: './game-worker-info.component.html',
  styleUrls: ['./game-worker-info.component.sass']
})
export class GameWorkerInfoComponent implements OnInit {

  @Input() worker: PassiveIncomer;
  
  @Output() onBought = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  click(){
    this.onBought.emit(this.worker.id);
  }
}
