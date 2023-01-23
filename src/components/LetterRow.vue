<template>
    <div class="chess-letter-row">
      <div :class="`chess-letter-field ${columnPosition}`">A</div>
      <div :class="`chess-letter-field ${columnPosition}`">B</div>
      <div :class="`chess-letter-field ${columnPosition}`">C</div>
      <div :class="`chess-letter-field ${columnPosition}`">D</div>
      <div :class="`chess-letter-field ${columnPosition}`">E</div>
      <div :class="`chess-letter-field ${columnPosition}`">F</div>
      <div :class="`chess-letter-field ${columnPosition}`">G</div>
      <div :class="`chess-letter-field ${columnPosition}`">H</div>
    </div>
</template>

<script setup>

    const {columnPosition} = defineProps (['columnPosition']);
    
</script>