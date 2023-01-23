<template>
    <div class="chess-field">
        <img class="" :src=imgUrl />
    </div>
</template>


<script setup>

    import { getPieceImageUrl } from '../utils.js';
    
    const {type, name, coordinates} = defineProps (['type', 'name', 'coordinates']);
    const imgUrl                    = getPieceImageUrl (type, name);

    console.log (coordinates);
</script>
