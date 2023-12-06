<template>
    <div class="jogo">
        <Forca
            :erros="erros"
        />

        <Palavra
            :palavra="palavra"
            :dica="dica"
            :verificarLetra="verificarLetra"
            :etapa="etapa"
        />

        <Teclado 
            v-if="etapa === 'jogo'"
            :letras="letras"
            :verificarLetra="verificarLetra"
            :jogar="jogar"
        />

        <Final 
        v-if="etapa != 'jogo'"
            :etapa="etapa"
            :texto="etapa === 'ganhador' ? 'Parabéns, você é o(a) ganhador(a)!' : 'Xiii, você perdeu.'"
            :jogarNovamente="jogarNovamente"/>
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Forca from './Forca'
import Palavra from './Palavra'
import Teclado from './Teclado'
import Final from './Final'

export default {
    name: 'Jogo',
    props: {
        erros: Number,
        palavra: String,
        dica: String,
        verificarLetra: Function,
        etapa: String,
        letras: Array,
        jogar: Function,
        jogarNovamente: Function
    },
    components: {
        Forca,
        Palavra,
        Teclado,
        Final
    }
}
</script>

<style>
.jogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>