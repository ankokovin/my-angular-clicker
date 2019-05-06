import { Component, OnInit} from '@angular/core';

import { GameLoopService } from '../../game-loop.service';

@Component({
  selector: 'app-game-click',
  templateUrl: './game-click.component.html',
  styleUrls: ['./game-click.component.sass'],
  
})
export class GameClickComponent implements OnInit {

  click(){
    this.gameLoopService.click();
  }

  constructor(private gameLoopService: GameLoopService) { }

  ngOnInit() {
  }

}
