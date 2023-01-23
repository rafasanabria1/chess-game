<template>
    <div class="chess-field" @click="handleClick">
        <img v-if="type && name != ''" class="" :src=imgUrl />
    </div>
</template>


<script setup>

    import { getPieceImageUrl } from '../utils.js';
    
    const {type, name, coordinates} = defineProps (['type', 'name', 'coordinates']);
    const imgUrl                    = getPieceImageUrl (type, name);

    const handleClick = () => {

        console.log (coordinates);
    }
    
</script>
