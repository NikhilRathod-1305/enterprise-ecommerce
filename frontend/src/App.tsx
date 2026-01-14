import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';
function App() {
  const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
  }
];


  const [cart , setCart] = useState<any[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product: any) => {
    console.log("Adding to cart:", product);
    setCart([...cart, product]);
    console.log("Current cart:", cart);
  }

  useEffect( () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((item ,i) => i !== index);
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1>🛍️ Enterprise E-Commerce</h1>
      <Cart items={cart} onRemove={removeFromCart} />
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
        ))
      }
    </div>
  );
}

export default App;
