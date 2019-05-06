import { PassiveIncomer } from './passive-incomer';

export class GameState{
    workers : PassiveIncomer[];
    value : number;

    constructor(workers : PassiveIncomer[], value:number){
        this.workers = workers;
        this.value = value;
    }
}