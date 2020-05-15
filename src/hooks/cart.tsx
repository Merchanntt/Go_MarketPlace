import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<Product[]> {
      const loadProductsFromStorage = await AsyncStorage.getItem(
        '@products:cart',
      );

      if (loadProductsFromStorage) {
        setProducts(JSON.parse(loadProductsFromStorage));
      }

      return {} as Product[];
    }

    loadProducts();
  }, []);

  useEffect(() => {
    async function saveProducts(): Promise<Product[]> {
      await AsyncStorage.setItem('@products:cart', JSON.stringify(products));

      return {} as Product[];
    }

    saveProducts();
  }, [products]);

  const increment = useCallback(
    async id => {
      const findItem = products.findIndex(item => item.id === id);

      const product = products[findItem];

      products[findItem] = {
        ...product,
        quantity: product.quantity += 1,
      };

      setProducts([...products]);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const findItem = products.findIndex(item => item.id === id);

      if (findItem === -1) {
        throw new Error('Produto não encontrado');
      }

      const product = [...products];

      if (product[findItem].quantity === 1) {
        product.splice(findItem, 1);

        setProducts(product.filter(item => item.id !== id));

        return;
      }

      product[findItem] = {
        ...product[findItem],
        quantity: product[findItem].quantity - 1,
      };

      setProducts([...products]);
    },
    [products],
  );

  const addToCart = useCallback(
    (product: Omit<Product, 'quantity'>) => {
      const findItem = products.findIndex(item => item.id === product.id);

      if (findItem < 0) {
        const addItem = {
          ...product,
          quantity: 1,
        };

        setProducts([...products, addItem]);

        return;
      }

      increment(product.id);
    },
    [products, increment],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
