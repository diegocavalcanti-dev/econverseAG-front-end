import styled from "styled-components";
import partnerBackground from "../../assets/images/partner-store.svg";
import { cores } from "../../styles";

export const PartnerSection = styled.section`
    max-width: 1280px; /* Limita a largura do conteúdo ao container */
    margin: 0 auto 90px;
    

    .partner {
        display: flex;
        height: 350px;
        gap: 12px;
        border-radius: 20px;
    }
    
    .partner-container {
        width: 100%;
        background-image: url(${partnerBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        justify-content: center; /* Centraliza o container horizontalmente */
        // align-items: center; /* Centraliza o conteúdo verticalmente */
        border-radius: 20px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.3); /* Sobreposição preta semi-transparente */
            z-index: 1; /* Mantém a sobreposição atrás do conteúdo */
        }
    }

    .container {
        z-index: 1; 
        width: 100%;
        padding: 114px 44px 0; /* Espaçamento interno para evitar que encoste nas bordas */

        .content {

        h1 {
            font-size: 40px;
            color: ${cores.branco};
            font-weight: 700;
            margin-bottom: 8px;
            line-height: 60px;
            font-family: Poppins, sans-serif;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin-bottom: 32px;
            color: ${cores.branco};
            font-family: Poppins, sans-serif;
        }

        .cta-button {
            background-color: ${cores.amarelo};
            width: 144px;
            height: 48px;
            color: ${cores.roxoMedio};
            border: none;
            font-family: Poppins, sans-serif;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;


            &:hover {
            background-color: ${cores.amarelo};
            }
        }
        }
    }
`
