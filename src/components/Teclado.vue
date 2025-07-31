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
        display: grid;
        grid-template-columns: repeat(13, 1fr);
        gap: 6px;
        max-width: 650px;
        margin: 20px auto 0 auto;
        justify-items: center;
        align-items: center;
    }
    .teclado-button{
        text-transform: uppercase;
        padding: 8px 0;
        height: 45px;
        min-width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background 0.2s, opacity 0.2s;
        background-color: var(--color-background-button);
        color: var(--color-text-light);
    }

    /* Media Query para telas menores (smartphones) */
    @media (max-width: 767px) {
        .teclado {
            grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
            gap: 4px;
            width: 95%;
            max-width: 400px;
        }
        .teclado-button {
            height: 35px;
            min-width: 35px;
            font-size: 0.9em;
            padding: 6px 0;
        }
    }
    /* Media Query para telas muito pequenas, se necessário */
    @media (max-width: 400px) {
        .teclado {
            gap: 3px;
        }
        .teclado-button {
            height: 30px;
            min-width: 30px;
            font-size: 0.8em;
        }
    }
</style>