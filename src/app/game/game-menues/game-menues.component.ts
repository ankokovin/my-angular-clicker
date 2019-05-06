import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameLoopService } from '../../game-loop.service';

import { PassiveIncomer } from '../../data-classes/passive-incomer';


@Component({
  selector: 'app-game-menues',
  templateUrl: './game-menues.component.html',
  styleUrls: ['./game-menues.component.sass']
})
export class GameMenuesComponent implements OnInit {


  constructor(private gameLoopService : GameLoopService) { 
    
  }

  ngOnInit() {
    this.workers = this.gameLoopService.getWorkers();
  }

  workers : PassiveIncomer[];
}
