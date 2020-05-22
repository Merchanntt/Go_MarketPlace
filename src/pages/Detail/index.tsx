import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';

import { View, Text } from 'react-native';
import { useCart } from '../../hooks/cart';

import {
  Container,
  ProductContainer,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductDescriptionContainer,
  ProductDescription,
  TotalContainer,
  ProductPrice,
  ActionContainer,
  ActionButton,
  ButtonText,
  RatingTitle,
  RatingContainer,
  RatingStarContainer,
} from './styles';

import FloatingCart from '../../components/FloatingCart';
import formatValue from '../../utils/formatValue';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
  description?: string;
}

const Details: React.FC = () => {
  const { addToCart } = useCart();
  const route = useRoute();

  const product: Product = route.params.item;

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

  return (
    <>
      <Container>
        <ProductContainer>
          <Product>
            <ProductImage source={{ uri: product.image_url }} />
            <ProductTitleContainer>
              <ProductTitle>{product.title}</ProductTitle>

              <ProductDescriptionContainer>
                <TotalContainer>
                  <ProductPrice>{formatValue(product.price)}</ProductPrice>
                </TotalContainer>
                <ProductDescription>
                  <Text>{product.description}</Text>
                </ProductDescription>
              </ProductDescriptionContainer>
            </ProductTitleContainer>
            <RatingContainer>
              <RatingTitle>Avaliação</RatingTitle>
              <RatingStarContainer>
                <MaterialIcons name="star" size={25} color="#e83f5b" />
                <MaterialIcons name="star" size={25} color="#e83f5b" />
                <MaterialIcons name="star" size={25} color="#e83f5b" />
                <MaterialIcons name="star" size={25} color="#e83f5b" />
                <MaterialIcons name="star" size={25} color="#ccc" />
              </RatingStarContainer>
            </RatingContainer>
            <ActionContainer>
              <ActionButton
                testID={`add-to-cart-${product.id}`}
                onPress={() => handleAddToCart(product)}
              >
                <FeatherIcon name="shopping-cart" color="#fff" size={16} />
                <ButtonText>Adicionar ao Carrinho</ButtonText>
              </ActionButton>
            </ActionContainer>
          </Product>
        </ProductContainer>
        <FloatingCart />
      </Container>
    </>
  );
};

export default Details;
