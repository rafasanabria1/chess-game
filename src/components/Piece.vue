<template>
    <div class="chess-field" @click="handleClick">
        <img v-if="piece.type && piece.name != ''" class="" :src=imgUrl />
    </div>
</template>


<script setup>

    import { getPieceImageUrl } from '../utils.js';
    
    const { piece } = defineProps (['piece']);
    const imgUrl  = getPieceImageUrl (piece);

    const handleClick = () => {

        console.log (piece.coordinates);
    }
    
</script>
