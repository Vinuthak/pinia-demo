import { defineStore } from "pinia";
import {ref,computed} from "vue";

export const useGameStore = defineStore("gameStore",() => {
        const score = ref(0);
        const maxHeath = ref(100);
        const maxAttack = ref(30);
        const maxDefence = ref(10);

    const getScore = computed(() => score.value);
    const getWinningScore = computed(() => maxHeath.value);
        
    const setNextAttack = () => {
        let attack = Math.floor(Math.random() * maxAttack.value)+1;
        score.value += attack;
    };
    const setNextDefence = () => {
        let defence = Math.floor(Math.random() * maxDefence.value)+1;
        score.value -= defence;
    };
    const resetScore = () => {
        score.value = 0;
    };
        
    return {
        //state
        score,
        maxAttack,
        maxDefence,
        maxHeath,
        getScore,
        getWinningScore,
        setNextAttack,
        setNextDefence,
        resetScore
    }

})