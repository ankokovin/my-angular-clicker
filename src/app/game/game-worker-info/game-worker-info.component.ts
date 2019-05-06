import { Component, OnInit, Input } from '@angular/core';

import { GameLoopService } from '../../game-loop.service';

import { PassiveIncomer } from '../../data-classes/passive-incomer';


@Component({
  selector: 'app-game-worker-info',
  templateUrl: './game-worker-info.component.html',
  styleUrls: ['./game-worker-info.component.sass']
})
export class GameWorkerInfoComponent implements OnInit {

  @Input() worker: PassiveIncomer;
  

  constructor(private gameLoopService: GameLoopService) { }

  ngOnInit() {
  }

  click(){
    this.gameLoopService.buy(this.worker.id);
  }
}
