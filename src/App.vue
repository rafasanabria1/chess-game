<script setup>

</script>

<template>
  <div class="chess-board">
    <div class="chess-row">
      <div class="chess-field">
        <div class="chess-letter">A</div>
        <img class="" src="./assets/black/rook.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/knight.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/bishop.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/king.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/queen.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/bishop.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/knight.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/black/rook.svg" />
      </div>
    </div>
    <div class="chess-row">
      <div v-for="i in 8" :key="i" class="chess-field">
        <img class="" src="./assets/black/pawn.svg" />
      </div>
    </div>
    <div class="chess-row">
      <div v-for="i in 8" :key="i" class="chess-field"></div>
    </div>
    <div class="chess-row">
      <div v-for="i in 8" :key="i" class="chess-field"></div>
    </div>
    <div class="chess-row">
      <div v-for="i in 8" :key="i" class="chess-field"></div>
    </div>
    <div class="chess-row">
      <div v-for="i in 8" :key="i" class="chess-field"></div>
    </div>
    <div class="chess-row">
      <div v-for="i in 8" :key="i" class="chess-field">
        <img class="" src="./assets/white/pawn.svg" />
      </div>
    </div>
    <div class="chess-row">
      <div class="chess-field">
        <img class="" src="./assets/white/rook.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/knight.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/bishop.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/king.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/queen.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/bishop.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/knight.svg" />
      </div>
      <div class="chess-field">
        <img class="" src="./assets/white/rook.svg" />
      </div>
    </div>
  </div>
</template>