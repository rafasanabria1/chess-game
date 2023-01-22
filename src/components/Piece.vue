<script setup>

    import { getPieceImageUrl } from '../utils.js';
    
    const {type, name} = defineProps (['type', 'name']);
    const imgUrl = getPieceImageUrl (type, name)

</script>

<template>
    <div class="chess-field">
        <img class="" :src=imgUrl />
    </div>
</template>