import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  DescriptionContainer,
  FeaturesContainer,
  FeatureIcon,
  ImageContainer,
  Feature,
} from "./styles";

export function About() {
  return (
    <AboutContainer>
      <DescriptionContainer>
        <div>
          <AboutTitle>
            Encontre o café perfeito para qualquer hora do dia
          </AboutTitle>
          <AboutDescription>
            Com o coffee delivery você recebe seu café onde estiver, a qualquer
            hora
          </AboutDescription>
        </div>
        <FeaturesContainer>
          <Feature>
            <FeatureIcon iconColor="darkYellow">
              <ShoppingCart weight="fill" />
            </FeatureIcon>{" "}
            Compra simples e segura
          </Feature>
          <Feature>
            <FeatureIcon iconColor="gray">
              <Package weight="fill" />
            </FeatureIcon>
            Embalagem mantém o café intacto
          </Feature>
          <Feature>
            <FeatureIcon iconColor="yellow">
              <Timer weight="fill" />
            </FeatureIcon>
            Entrega rápida e rastreada
          </Feature>
          <Feature>
            <FeatureIcon iconColor="purple">
              <Coffee weight="fill" />
            </FeatureIcon>
            O café chega fresquinho até você
          </Feature>
        </FeaturesContainer>
      </DescriptionContainer>
      <ImageContainer>
        <img src="Imagem.png" alt="" />
      </ImageContainer>
    </AboutContainer>
  );
}
