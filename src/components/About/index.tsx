import { Package, ShoppingCart, Timer } from "phosphor-react";
import { Feature } from "../Feature";
import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  DescriptionContainer,
  FeaturesContainer,
  ImageContainer,
  SmallDeviceImg,
} from "./styles";

export function About() {
  return (
    <AboutContainer>
      <DescriptionContainer>
        <div>
          <div>
            <AboutTitle>
              Encontre o café perfeito para qualquer hora do dia
            </AboutTitle>
            <AboutDescription>
              Com o coffee delivery você recebe seu café onde estiver, a
              qualquer hora
            </AboutDescription>
          </div>
          <SmallDeviceImg>
            <img src="Imagem.png" alt="" />
          </SmallDeviceImg>
          <FeaturesContainer>
            <Feature feature="Compra simples e segura" />
            <Feature feature="Embalagem mantém o café intacto" />
            <Feature feature="Entrega rápida e rastreada" />
            <Feature feature="O café chega fresquinho até você" />
          </FeaturesContainer>
        </div>
        <ImageContainer>
          <img src="Imagem.png" alt="" />
        </ImageContainer>
      </DescriptionContainer>
    </AboutContainer>
  );
}
