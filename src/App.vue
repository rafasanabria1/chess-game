<script setup>

import Piece from './components/Piece.vue';
</script>

<template>
  <div class="chess-board">
    <div class="chess-letter-row">
      <div class="chess-letter-field"></div>
      <div class="chess-letter-field first">A</div>
      <div class="chess-letter-field first">B</div>
      <div class="chess-letter-field first">C</div>
      <div class="chess-letter-field first">D</div>
      <div class="chess-letter-field first">E</div>
      <div class="chess-letter-field first">F</div>
      <div class="chess-letter-field first">G</div>
      <div class="chess-letter-field first">H</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">1</div>
      <piece type="black" name="rook" />
      <piece type="black" name="knight" />
      <piece type="black" name="bishop" />
      <piece type="black" name="king" />
      <piece type="black" name="queen" />
      <piece type="black" name="bishop" />
      <piece type="black" name="knight" />
      <piece type="black" name="rook" />
      <div class="chess-number-field last">1</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">2</div>
      <piece v-for="i in 8" :key="i" type="black" name="pawn" />
      <div class="chess-number-field last">2</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">3</div>
      <div v-for="i in 8" :key="i" class="chess-field"></div>
      <div class="chess-number-field last">3</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">4</div>
      <div v-for="i in 8" :key="i" class="chess-field"></div>
      <div class="chess-number-field last">4</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">5</div>
      <div v-for="i in 8" :key="i" class="chess-field"></div>
      <div class="chess-number-field last">5</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">6</div>
      <div v-for="i in 8" :key="i" class="chess-field"></div>
      <div class="chess-number-field last">6</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">7</div>
      <piece v-for="i in 8" :key="i" type="white" name="pawn" />
      <div class="chess-number-field last">7</div>
    </div>
    <div class="chess-row">
      <div class="chess-number-field first">8</div>
      <piece type="white" name="rook" />
      <piece type="white" name="knight" />
      <piece type="white" name="bishop" />
      <piece type="white" name="king" />
      <piece type="white" name="queen" />
      <piece type="white" name="bishop" />
      <piece type="white" name="knight" />
      <piece type="white" name="rook" />
      <div class="chess-number-field last">8</div>
    </div>
    <div class="chess-letter-row last">
      <div class="chess-letter-field"></div>
      <div class="chess-letter-field">A</div>
      <div class="chess-letter-field">B</div>
      <div class="chess-letter-field">C</div>
      <div class="chess-letter-field">D</div>
      <div class="chess-letter-field">E</div>
      <div class="chess-letter-field">F</div>
      <div class="chess-letter-field">G</div>
      <div class="chess-letter-field">H</div>
    </div>
  </div>
</template>