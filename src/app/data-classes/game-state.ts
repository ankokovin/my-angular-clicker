import { PassiveIncomer } from './passive-incomer';

export class GameState{
    workers : PassiveIncomer[];
    value : number;

    constructor(workers : PassiveIncomer[], value:number){
        this.workers = workers;
        this.value = value;
    }

    getPassiveIncome(){
        return this.workers.map(function(x){
            return x.getInc();
        }).reduce(function(sum, current){
            return sum+current;
        });
    }

    getClickIncome(){
        //TODO
        return 1;
    }


    click(){
        this.value += this.getClickIncome();
    }
    
    can_buy(id:number){
        return this.workers.find(
            function(x){
                return x.id==id;
            }
        ).getAddCost()<=this.value;
    }


    buy(id:number){
        console.log(id);
        if(this.can_buy(id)){
            this.value -=this.workers.find(
                function(x){
                    return x.id==id;
                }
            ).buy();
        }
    }

    tick(){
        this.value+=this.getPassiveIncome();
    }

    start(){
        var that = this;
        setInterval(function(){
            that.tick();
        }, 1000);
    }
}