import { FeatureCart } from "../FeatureCart";
import { FeatureClock } from "../FeatureClock";
import { FeatureCoffee } from "../FeatureCoffee";
import { FeaturePackage } from "../FeaturePackage";

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
            <FeatureCart color="darkYellow" feature="Compra simples e segura"></FeatureCart>
            <FeaturePackage color="gray" feature="Embalagem mantém o café intacto" />
            <FeatureClock color="yellow" feature="Entrega rápida e rastreada" />
            <FeatureCoffee color="purple" feature="O café chega fresquinho até você" />
          </FeaturesContainer>
        </div>
        <ImageContainer>
          <img src="Imagem.png" alt="" />
        </ImageContainer>
      </DescriptionContainer>
    </AboutContainer>
  );
}
