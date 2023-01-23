<template>

    <div v-if="rowPosition == 1 || rowPosition == 8" :class="`chess-row ${rowPosition % 2 == 0 ? 'even' : 'odd'}`">
      <div class="chess-number-field start">{{ rowPosition }}</div>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="rook" :coordinates="{x: 1, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="knight" :coordinates="{x: 2, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="bishop" :coordinates="{x: 3, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="king" :coordinates="{x: 4, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="queen" :coordinates="{x: 5, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="bishop" :coordinates="{x: 6, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="knight" :coordinates="{x: 7, y: rowPosition}"/>
        <piece :type="`${rowPosition == 1 ? 'black' : 'white'}`" name="rook" :coordinates="{x: 8, y: rowPosition}"/>
      <div class="chess-number-field end">{{ rowPosition }}</div>
    </div>

    <div v-else-if="rowPosition == 2 || rowPosition == 7" :class="`chess-row ${rowPosition % 2 == 0 ? 'even' : 'odd'}`">
      <div class="chess-number-field start">{{ rowPosition }}</div>
      <piece v-for="i in 8" :key="i" :type="`${rowPosition == 2 ? 'black' : 'white'}`" name="pawn" :coordinates="{x: i, y: rowPosition}" />
      <div class="chess-number-field end">{{ rowPosition }}</div>
    </div>

    <div v-else>
        <div :class="`chess-row ${rowPosition % 2 == 0 ? 'even' : 'odd'}`">
            <div class="chess-number-field start">{{ rowPosition }}</div>
            <div v-for="i in 8" :key="i" class="chess-field"></div>
            <div class="chess-number-field end">{{ rowPosition }}</div>
        </div>
    </div>
</template>

<script setup>

    import Piece from './Piece.vue';
    
    const {rowPosition} = defineProps (['rowPosition']);
    
</script>