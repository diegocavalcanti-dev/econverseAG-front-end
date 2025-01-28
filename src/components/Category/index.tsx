import { CategoryMenu } from "./styles";

import tecnologiaIcon from "../../assets/images/tecnologia.svg";
import supermercadosIcon from "../../assets/images/supermercados.svg";
import bebidasIcon from "../../assets/images/bebidas.svg";
import ferramentasIcon from "../../assets/images/ferramentas.svg";
import saudeIcon from "../../assets/images/saude.svg";
import esportesIcon from "../../assets/images/esportes.svg";
import modaIcon from "../../assets/images/moda.svg";

const Category = () => (
    <CategoryMenu>
        <div className="container">
            <ul>
                <li>
                    <div className="image-container">
                        <img src={tecnologiaIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Tecnologia</p>
                </li>
                <li>
                    <div className="image-container">
                        <img src={supermercadosIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Supermercado</p>
                </li>
                <li>
                    <div className="image-container">
                        <img src={bebidasIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Bebidas</p>
                </li>
                <li>
                    <div className="image-container">
                        <img src={ferramentasIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Ferramentas</p>
                </li>
                <li>
                    <div className="image-container">
                        <img src={saudeIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Saúde</p>
                </li>
                <li>
                    <div className="image-container">
                        <img src={esportesIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Esportes e Fitness</p>
                </li>
                <li>
                    <div className="image-container">
                        <img src={modaIcon} alt="Tecnologia" />
                    </div>
                    <p className="category-name">Moda</p>
                </li>
            </ul>
        </div>
    </CategoryMenu>
);

export default Category;
