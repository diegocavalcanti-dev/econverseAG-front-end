import styled from "styled-components";
import { cores } from "../../styles";

export const CategoryMenu = styled.div`
    padding: 40px 0 90px;
    margin: 0 auto;
    max-width: 1160px; /* Limita o conteúdo a uma largura menor */

    .container {
        margin: 0 auto;
        display: flex;
        justify-content: center; /* Centraliza o menu */
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Alinha os itens no topo */
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 42px; /* Espaçamento entre os itens */
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-family: Poppins, sans-serif;
        cursor: pointer;

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 128px; /* Largura fixa da caixa */
            height: 128px; /* Altura fixa da caixa */
            background-color: ${cores.corFundoCategory};
            box-shadow: 0px 4px 12px #00000021;
            border-radius: 8px;
            margin-bottom: 20px; /* Espaçamento entre a imagem e o texto */
        }

        img {
            width: 60px;
            height: 60px;
        }

        .category-name {
            font-size: 14px;
            font-weight: 500;
            color: ${cores.corCategory};
            transition: all 0.3s ease;
            line-height: 20px;
        }

        &:hover {
        .image-container {
            background-color: ${cores.branco};
        }

        .category-name {
            color: ${cores.roxoEscuro};
            font-weight: 600;
        }
        }
    }
`;
