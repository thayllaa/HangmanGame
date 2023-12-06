<template>
    <div class="final">
        <div :class="`final-text ${etapa}`">
            {{ texto }}
        </div>

        <button class="final-button"
        v-on:click="jogarNovamente"> Jogar novamente </button>
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    name: 'Final',
    props: {
        etapa: String,
        texto: String,
        jogarNovamente: Function
    }
}
</script>

<style>
    .final-text{
        margin: 20px 0px;
        font-size: 24px;
        font-weight: bold;
    }

    .final-text.enforcado{
        color:var(--color-text-error);
    }

    .final-text.ganhador{
        color: var(--color-text-success);
    }
</style>