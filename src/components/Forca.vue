<template>
    <div class="forca">
        <img :src="`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${erros}.svg`">
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    name: 'Forca',
    props: {
        erros: Number
    },
    data() {
        return {
          
        }
    },
    methods: {
        
    },
}
</script>

<style>
.forca img{
    width: 100px;
}
</style>