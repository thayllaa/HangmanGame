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

        <div v-if="etapa === 'jogo'" class="input-area">
            <Teclado
                v-if="!isMobile"
                :letras="letras"
                :verificarLetra="verificarLetra"
                :jogar="jogar"
            />

            <div v-else class="mobile-input-container">
                <input
                    type="text"
                    maxlength="1"
                    v-model="letraDigitada"
                    @keyup.enter="processarLetra"
                    @focus="focusInput"
                    ref="mobileInput"
                    placeholder="Digite uma letra"
                    class="letra-input"
                />
                <button @click="processarLetra">Jogar Letra</button>
            </div>
        </div>

        <Final
            v-if="etapa != 'jogo'"
            :etapa="etapa"
            :texto="etapa === 'ganhador' ? 'Parabéns, você é o(a) ganhador(a)!' : 'Xiii, você perdeu.'"
            :jogarNovamente="jogarNovamente"/>
    </div>
</template>

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
        jogar: Function, // O método 'jogar' do App.vue
        jogarNovamente: Function
    },
    data() {
        return {
            isMobile: false, // Nova propriedade de dados para detectar mobile
            letraDigitada: '' // Nova propriedade para o v-model do input
        }
    },
    components: {
        Forca,
        Palavra,
        Teclado,
        Final
    },
    methods: {
        // Novo método para detectar se é mobile
        checkIsMobile() {
            // Verifica a largura da tela ou User-Agent (largura é mais comum para responsividade)
            // Você pode ajustar o breakpoint (ex: 768) para o que você considera "mobile"
            this.isMobile = window.innerWidth <= 768; // Ou qualquer breakpoint que você defina para mobile
        },
        // Novo método para processar a letra do input
        processarLetra() {
            const letra = this.letraDigitada.trim().toLowerCase(); // Limpa e normaliza
            if (letra && letra.length === 1 && !this.verificarLetra(letra)) {
                this.jogar(letra); // Chama o método 'jogar' do pai (App.vue)
                this.letraDigitada = ''; // Limpa o input após jogar
                // Força o foco no input novamente para manter o teclado virtual aberto
                this.$nextTick(() => {
                    if (this.$refs.mobileInput) {
                        this.$refs.mobileInput.focus();
                    }
                });
            } else if (letra && this.verificarLetra(letra)) {
                alert('Essa letra já foi jogada!'); // Feedback para o usuário
                this.letraDigitada = '';
                this.$nextTick(() => {
                    if (this.$refs.mobileInput) {
                        this.$refs.mobileInput.focus();
                    }
                });
            }
        },
        // Método para garantir que o input seja focado automaticamente ao entrar no jogo
        focusInput() {
            if (this.$refs.mobileInput) {
                this.$refs.mobileInput.focus();
            }
        }
    },
    mounted() {
        // Verifica se é mobile quando o componente é montado
        this.checkIsMobile();
        // Ouve redimensionamentos da janela para atualizar 'isMobile'
        window.addEventListener('resize', this.checkIsMobile);
        // Foca o input quando o jogo começa e é mobile
        if (this.isMobile && this.etapa === 'jogo') {
            this.focusInput();
        }
    },
    beforeUnmount() {
        // Remove o event listener ao desmontar o componente para evitar vazamento de memória
        window.removeEventListener('resize', this.checkIsMobile);
    },
    watch: {
        // Observa a mudança de etapa para focar o input quando o jogo começa
        etapa(newVal) {
            if (newVal === 'jogo' && this.isMobile) {
                this.$nextTick(() => {
                    this.focusInput();
                });
            }
        }
    }
}
</script>

<style scoped>
.jogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-grow: 1; /* Permite que o jogo ocupe o espaço restante na coluna do #app */
    justify-content: center; /* Centraliza o conteúdo do jogo verticalmente */
}

/* Estilos básicos para o container do input mobile */
.mobile-input-container {
    display: flex;
    gap: 10px; /* Espaçamento entre input e botão */
    margin-top: 20px;
    width: 80%; /* Ajuste a largura conforme necessário */
    max-width: 300px; /* Limite máximo para telas maiores */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Alinha verticalmente */
    flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
}

.letra-input {
    flex-grow: 1; /* Permite que o input cresça */
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
    border: 2px solid var(--color-background-button);
    border-radius: 5px;
    background-color: var(--color-background);
    color: var(--color-text-light);
    min-width: 100px; /* Largura mínima para o input */
}

.letra-input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.letra-input:focus {
    outline: none;
    border-color: var(--color-text-title);
}

.mobile-input-container button {
    padding: 10px 15px;
    /* Usa os estilos de botão que já existem no seu global.css */
}
</style>