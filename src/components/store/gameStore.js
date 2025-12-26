import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore",{
    state: () => ({
        score: 0,
        maxHeath: 100,
        maxAttack: 30,
        maxDefence: 10

    }),
    getters:{
        getScore(){
            return this.score
        },
    },
    actions: {
        setNextAttack(){
            let attack = Math.floor(Math.random() * this.maxAttack)+1;
            console.log("attack", attack);
            this.score += attack;
        },
        setNextDefence(){
            let defence = Math.floor(Math.random() * this.maxDefence)+1;
            console.log("defence", defence);
            this.score -= defence;
        }
        
    }

})