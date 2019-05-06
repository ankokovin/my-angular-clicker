import { Component, OnInit} from '@angular/core';
import { GameLoopService } from '../../game-loop.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor(private gameLoopService: GameLoopService) { 
    gameLoopService.newGame();
  }

  ngOnInit() {
    
  }
}
