<template>
    <div>
        <h1 class="text-center">Info</h1>
        <p class="text-center">This is the info page</p>
        <p>A simple game to increment and decrement or randomize the score. The score starts at {{ gameStore.getScore }} and you can win by reaching {{ gameStore.getWinningScore }}</p>
    </div>
    Wiining Score:
    <input type="text" v-model="gameStore.maxHeath"/>

</template>

<script setup>

import { useGameStore } from './store/gameStore';

const gameStore = useGameStore();
    
</script>