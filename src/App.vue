<template>
  <div class="chess-board">
    <letter-row rowPosition="start"></letter-row>
    <chess-row v-for="i in 8" :rowPosition=i></chess-row>
    <letter-row rowPosition="end"></letter-row>
  </div>
</template>

<script setup>

  import LetterRow from './components/LetterRow.vue';
  import ChessRow from './components/ChessRow.vue';
  
</script>