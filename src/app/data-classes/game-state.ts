import { PassiveIncomer } from './passive-incomer';


export class GameState{
    workers : PassiveIncomer[];
    value : number;
    needValue : number;
    energy : number;


    constructor(workers : PassiveIncomer[], needValue:number, energy:number){
        this.workers = workers;
        this.needValue = needValue;
        this.energy = energy;
        this.value = 0;
    }
}