<template>
    <div class="final-overlay">
        <div class="final-modal">
            <div :class="`final-text ${etapa}`">
                {{ texto }}
            </div>

            <button class="final-button"
            v-on:click="jogarNovamente"> Jogar novamente </button>
        </div>
    </div>
</template>

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

<style scoped>
/* --- Estilos para o Overlay (fundo escuro) --- */
.final-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo preto semi-transparente */
    display: flex; /* Usa flexbox para centralizar o modal */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    z-index: 1000; /* Garante que o popup fique acima de outros elementos */
    /* Você pode adicionar um fade-in com transition aqui se quiser */
    transition: background-color 0.3s ease;
}

/* --- Estilos para o Modal (a caixa do popup) --- */
.final-modal {
    background-color: var(--color-background); /* Usa a cor de fundo do seu tema */
    padding: 30px 40px; /* Preenchimento interno */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidade */
    text-align: center; /* Centraliza o texto e botão dentro do modal */
    max-width: 90%; /* Máximo de 90% da largura da tela */
    width: 400px; /* Largura padrão para desktop */
    transform: scale(1); /* Ponto de partida para animação, se desejar */
    transition: transform 0.3s ease-out; /* Transição para o modal em si */
}

/* --- Estilos para o Texto Final (ganhador/perdedor) --- */
.final-text {
    margin: 20px 0px;
    font-size: 28px; /* Aumenta um pouco o tamanho da fonte para destaque */
    font-weight: bold;
}

.final-text.enforcado {
    color: var(--color-text-error); /* Cor definida nas suas variáveis */
}

.final-text.ganhador {
    color: var(--color-text-success); /* Cor definida nas suas variáveis */
}

/* --- Estilos para o Botão "Jogar novamente" --- */
.final-button {
    margin-top: 15px; /* Espaçamento acima do botão */
    padding: 12px 25px; /* Padding um pouco maior para o botão */
    font-size: 1.1em;
}

/* --- Responsividade para o Modal --- */
@media (max-width: 600px) {
    .final-modal {
        padding: 20px 25px; /* Menor padding em telas menores */
        max-width: 95%; /* Ocupa um pouco mais da largura em mobile */
        width: auto; /* Deixa a largura se ajustar ao conteúdo */
    }

    .final-text {
        font-size: 24px; /* Ajusta o tamanho da fonte para mobile */
    }

    .final-button {
        font-size: 1em; /* Ajusta a fonte do botão para mobile */
        padding: 10px 20px;
    }
}
</style>