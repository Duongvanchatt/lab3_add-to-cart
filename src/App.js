import { useState } from 'react';
import './App.css';
import Cart from './component/Cart';
import Main from './component/Main';
import data from './data';
function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find((X) => X.id === product.id);
    if(exist){
      setCartItems(cartItems.map((X) => X.id === product.id ? {...exist, qty: exist.qty + 1}: X
      )
      );
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  const onRemove = (product) =>{
     const exist = cartItems.find((X) => X.id === product.id);

     if(exist.qty === 1){
      setCartItems(cartItems.filter((X)=> X.id !== product.id));
     }else{
      setCartItems(cartItems.map((X) => X.id === product.id ? {...exist, qty: exist.qty - 1}: X
        )
      );
     }
  };
  return (
    <div className="App">
       <Main onAdd={onAdd}  products = {products}></Main>
       <div>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} ></Cart>
       </div>
    </div>
  );
}

export default App;
