import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 10px #ccc;
`;

export const Product = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  height: 80%;
  width: 90%;
`;

export const ProductImage = styled.Image`
  height: 350px;
  width: 350px;
  align-self: center;
  margin-top: 20px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 15px;
`;

export const ProductTitle = styled.Text`
  font-size: 30px;
`;

export const ProductDescriptionContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 2px;

  font-size: 16px;
  color: #e83f5b;
`;
export const ProductDescription = styled.Text`
  font-size: 16px;
  color: #a0a0b3;
  margin-top: 20px;
`;

export const RatingContainer = styled.View`
  flex: 1;
  margin-top: 40px;
  margin-bottom: 3px;
`;

export const RatingTitle = styled.Text`
  margin-left: 5px;
  color: #e83f5b;
  font-size: 14px;
  font-weight: bold;
`;

export const RatingStarContainer = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const ActionContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 2px;
`;

export const ActionButton = styled.TouchableOpacity`
  background: #e83f5b;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-size: 14px;
`;
