<template>
    <div class="teclado">
        <button class="teclado-button"
        v-for="(letra,key) in 'abcdefghijklmnopqrstuvwxyz'"
        :key="key"
        :disable="verificarLetra(letra)"
        v-on:click="jogar(letra)">
            {{ letra }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Teclado',
    props: {
        letras: Array,
        verificarLetra: Function,
        jogar: Function
    }
}
</script>

<style scoped>
    .teclado{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 95%;
        margin-top: 20px;
    }
    .teclado-button{
        margin: 3px; 
        text-transform: uppercase;
        padding: 8px 8px;
        min-width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>