<template>
    <div class="chess-letter-row">
      <div :class="`chess-letter-field ${position}`">A</div>
      <div :class="`chess-letter-field ${position}`">B</div>
      <div :class="`chess-letter-field ${position}`">C</div>
      <div :class="`chess-letter-field ${position}`">D</div>
      <div :class="`chess-letter-field ${position}`">E</div>
      <div :class="`chess-letter-field ${position}`">F</div>
      <div :class="`chess-letter-field ${position}`">G</div>
      <div :class="`chess-letter-field ${position}`">H</div>
    </div>
</template>

<script setup>

    const {position} = defineProps (['position']);
    
</script>