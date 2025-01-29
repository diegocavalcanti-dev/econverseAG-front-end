import { VitrineSection, VitrineMenu, VitrineTitle, VitrineProduct, VitrineContainer } from "./styles"

import iphoneProduct from "../../assets/images/iphone.png"

const VitrineSecond = () => (
    <VitrineSection>
        <VitrineTitle>
            <h1>Produtos relacionados</h1>
        </VitrineTitle>
        <VitrineMenu>
            <div>
                <h1>Ver todos</h1>
            </div>
        </VitrineMenu>
        <VitrineContainer>
        {[1, 2, 3, 4].map((_, index) => (
            <VitrineProduct key={index}>
                <img src={iphoneProduct} alt="iPhone" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>R$ 30,90</p>
                <p>R$ 28,90</p>
                <p>ou 2x de R$ 49,95 sem juros</p>
                <p>Frete grátis</p>
                <button type="button">COMPRAR</button>
            </VitrineProduct>
        ))}
        </VitrineContainer>
    </VitrineSection>
)

export default VitrineSecond