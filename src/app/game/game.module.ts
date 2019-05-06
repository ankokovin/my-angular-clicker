import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';
import { GameStateComponent } from './game-state/game-state.component';
import { GameClickComponent } from './game-click/game-click.component';

import { MaterialthingsModule } from '../materialthings/materialthings.module';
import { GameMenuesComponent } from './game-menues/game-menues.component';
import { GameWorkersComponent } from './game-workers/game-workers.component';
import { GameWorldInfoComponent } from './game-world-info/game-world-info.component';
import { GameWorldAscendComponent } from './game-world-ascend/game-world-ascend.component';
import { GameWorkerInfoComponent } from './game-worker-info/game-worker-info.component';

import { GameLoopService } from '../game-loop.service';

@NgModule({
  declarations: [GameComponent, GameClickComponent, GameStateComponent, GameMenuesComponent, GameWorkersComponent, GameWorldInfoComponent, GameWorldAscendComponent, GameWorkerInfoComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialthingsModule
  ],
  providers:[
    GameLoopService
  ],
  bootstrap:[GameComponent]
})
export class GameModule { }
