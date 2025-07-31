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

<!-- eslint-disable vue/multi-word-component-names -->
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

<style>
    .teclado{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 85%;
        margin-top: 20px;
    }
    .teclado-button{
        margin: 5px;
        text-transform: uppercase;
    }
</style>