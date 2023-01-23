<template>
    <div class="chess-board">
        <letter-row columnPosition="start"></letter-row>
        <chess-row v-for="i in 8" :rowPosition=i></chess-row>
        <letter-row columnPosition="end"></letter-row>
  </div>
</template>

<script setup>

    import LetterRow from './LetterRow.vue';
    import ChessRow from './ChessRow.vue';
    
</script>