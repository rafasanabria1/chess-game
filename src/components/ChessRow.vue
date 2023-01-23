<template>

    <div :class="`chess-row ${rowPosition % 2 == 0 ? 'even' : 'odd'}`">
      <div class="chess-number-field start">{{ rowPosition }}</div>
      <template v-if="rowPosition == 1" v-for="(p, index) in getBlacksNotPawns">
        <piece :class="`${index}`" :piece="p" type="black" :name="p.name" :coordinates="p.coordinates" />
      </template>
      <template v-else-if="rowPosition == 2" v-for="(p, index) in getBlacksPawns">
        <piece :class="`${index}`" :piece="p" type="black" :name="p.name" :coordinates="p.coordinates" />
        </template>
      <template v-else-if="rowPosition == 7" v-for="(p, index) in getWhitesNotPawns">
        <piece :class="`${index}`" :piece="p" type="white" :name="p.name" :coordinates="p.coordinates" />
      </template>
      <template v-else-if="rowPosition == 8" v-for="(p, index) in getWhitesPawns">
        <piece :class="`${index}`" :piece="p" type="white" :name="p.name" :coordinates="p.coordinates" />
      </template>
      <template v-else>
        <piece v-for="i in 8" :key="i" :piece="{}" type="false" name="" :coordinates="{x: i, y: rowPosition}" />
      </template>
      <div class="chess-number-field end">{{ rowPosition }}</div>
    </div>
    
    
</template>

<script setup>

    import Piece from './Piece.vue';
    import { usePiecesStore } from '../stores/pieces';
    import { storeToRefs } from 'pinia';
    
    const {rowPosition} = defineProps (['rowPosition']);
    const piecesStore   = usePiecesStore ();
    const { pieces, getBlacksNotPawns, getBlacksPawns, getWhitesNotPawns, getWhitesPawns } = storeToRefs (piecesStore)

</script>