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
        width: 100%;  
        max-width: 500px; 
        margin: 20px auto 0 auto;  
    }
    .teclado-button{
        margin: 4px;  
        text-transform: uppercase;
        padding: 8px 10px;  
        min-width: 40px; 
        height: 40px; 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1; 
        flex-shrink: 1;
        flex-basis: auto; 
        transition: background 0.2s, opacity 0.2s;
        border-radius: 5px;
    }

    /* Opcional: Ajustes para telas muito pequenas */
    @media (max-width: 480px) {
        .teclado {
            max-width: 320px;
        }
        .teclado-button {
            margin: 3px;
            padding: 6px 8px;
            min-width: 30px;
            height: 30px;
            font-size: 0.9em;
        }
    }
</style>