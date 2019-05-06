
//todo: make read from file
let incCostFactor = 1.3;
let incValFactor = 1.15;

export class PassiveIncomer{
    id:number;
    name: string;
    baseSpeed: number;
    lvl: number;
    baseCost: number;

    constructor(id:number, name:string, baseSpeed:number, lvl:number, baseCost: number){
        this.id = id;
        this.name = name;
        this.baseSpeed = baseSpeed;
        this.baseCost = baseCost;
        this.lvl = lvl;
    }

    getInc(){
        return this.getIncomeForLvl(this.lvl);
    }

    getAddCost(){
        return Math.ceil(this.baseCost*incCostFactor**(this.lvl-1));
    }

    getAddInc(){
        return Math.ceil(this.baseSpeed*incValFactor**(this.lvl-1)) ;
    }

    //сумма геометрической прогрессии
    getIncomeForLvl(lvl: number){
        return Math.ceil(this.baseSpeed*(1-incValFactor**this.lvl)/(1-incValFactor));
    }

    buy(){
        let cost = this.getAddCost();
        this.lvl++;
        return cost;
    }
}