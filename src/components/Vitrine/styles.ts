import styled from "styled-components";
import { cores } from "../../styles";

export const VitrineSection = styled.div`
    max-width: 1280px; /* Limita a largura do conteúdo ao container */
    margin: 0 auto 80px;
`

export const VitrineTitle = styled.div`
    display: flex;
    justify-content: center; /* Centraliza o menu */
    align-items: center;
    position: relative;
    margin-bottom: 4px;

    h1 {
        font-family: Poppins, sans-serif;
        color: ${cores.roxo};
        font-weight: 700;
        font-size: 30px;
        background-color: ${cores.branco}; /* Fundo branco para sobrepor as bordas */
        padding: 0; /* Cria um espaço entre o texto e as bordas */
        z-index: 1;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        height: 1px;
        background: ${cores.corVitrineLinha};
        top: 50%;
        width: 360px; /* Linhas laterais do título */
    }

    &::before {
        left: calc(100% - 360px - 68px); /* Ajusta para que fique alinhado */
    }

    &::after {
        right: calc(100% - 360px - 68px); /* Ajusta para que fique alinhado */
    }
`

export const VitrineMenu = styled.div`
        // padding: 16px 0;
        // border: 1px solid #BDBDBD;
    
        div {
            max-width: 1140px; /* Limita a largura máxima */
            width: 100%;
            display: flex;
            margin: 0 auto;
            justify-content: center;
        }
    
        ul {
            display: flex; 
            justify-content: space-between;
            align-items: center;
            list-style: none;
            flex: 1;
            max-width: 1280px;
            // border: 1px solid #BDBDBD;
        }
    
        li {
            font-size: 16px; 
            font-weight: 400; 
            font-family: Poppins, sans-serif;
            color: ${cores.corVitrineMenu};
            cursor: pointer;
            line-height: 16px;
            text-align: center;
            width: 214px; /* Largura fixa */
            text-align: center;
            border: 1px solid #BDBDBD; /* Adiciona a borda direita */
            padding: 12px 0;
        }
    
        li:hover {
            color: ${cores.roxo};
            font-weight: 700;
        }
`

export const VitrineProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 304px; /* Largura fixa para o card */
    padding: 16px;
    border: 1px solid #e0e0e0; /* Borda cinza clara */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0px 3px 19px #00000038; /* Sombra leve */
    font-family: 'Poppins', sans-serif;

    img {
        width: 100%; /* Adapta a largura da imagem ao container */
        height: auto;
        margin-bottom: 16px; /* Espaço abaixo da imagem */
    }

    p {
        font-size: 16px;
        color: ${cores.cinza}; 
        line-height: 22px;
    }

    p:nth-child(2) {
        margin-bottom: 12px;
        color: ${cores.cinza};
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
    }

    /* Preço promocional riscado */
    p:nth-child(3) {
        text-decoration: line-through;
        color: ${cores.corDesconto};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 2px;
    }

    /* Preço atual */
    p:nth-child(4) {
        font-size: 20px;
        font-weight: 700;
        color: ${cores.cinza}; 
        line-height: 30px;
        margin-bottom: 2px;
    }

    /* Parcelamento */
    p:nth-child(5) {
        font-size: 12px;
        font-weight: 400;
        color: ${cores.cinza}; 
        line-height: 18px;
        margin-bottom: 8px;
    }

    /* Texto de frete grátis */
    p:nth-child(6) {
        font-size: 12px;
        color: ${cores.roxo};
        font-weight: 400;
    }

    button {
        margin-top: 16px;
        padding: 12px 24px;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        color: ${cores.branco};
        background-color: ${cores.roxo};
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: ${cores.roxoEscuro};
        }
    }
`;

export const VitrineContainer = styled.div`
    display: flex;
    gap: 18px; /* Espaçamento entre os cards */
    margin-top: 32px;
`;
