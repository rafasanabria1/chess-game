<template>
    <div class="chess-board" ref="chessBoard">
        <div class="chess-letter-row">
            <div v-for="letter in LETTERS" class="chess-letter-field start">{{ letter }}</div>
        </div>
        <template v-for="y in 8">
            <div class="chess-row">
                <div class="chess-number-field start">{{ y }}</div>
                <template v-for="x in 8">
                    <div :class="`chess-field ${(x+y) % 2 == 0 ? 'light' : 'dark'}`" ref="chessFields" :id="`${x}|${y}`" @click="handleClick"></div>
                </template>
                <div class="chess-number-field end">{{ y }}</div>
            </div>
        </template>
        <div class="chess-letter-row">
            <div v-for="letter in LETTERS" class="chess-letter-field end">{{ letter }}</div>
        </div>
  </div>
  <div class="info-turn">
    TURNO {{ turn == TURNS.WHITES ? 'BLANCAS' : 'NEGRAS' }}
  </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useGameStore } from '../stores/game';
    import { getPieceImageUrl } from '../utils.js';
    import { TURNS, LETTERS } from '../vars';
    
    const gameStore        = useGameStore ();
    const { turn, pieces } = storeToRefs (gameStore);
    const chessBoard = ref (null);

    onMounted ( () => {

        pieces.value.forEach (p => {
            
            if (p.out) return;
            
            const imgUrl = getPieceImageUrl (p);
            chessBoard.value.querySelector (`[id="${p.coordinates.x}|${p.coordinates.y}"]`).innerHTML = `<img class="piece-img ${p.name} ${p.type}" src="${imgUrl}" />`;
        });

        
    });
    

    const handleClick = () => {

        console.log ('click');
        gameStore.changeTurn ();
    }
    
</script>