import React from 'react';

export default function Cart (props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + taxPrice;
    return (
        <div className='block'>
             <h2>Giỏ hàng</h2>
             <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item)=>(
                    <div key={item.id} className="row">
                        <div>
                        <div>{item.name}</div>
                        <div><img className='big' src={item.image} alt={item.name}></img></div>
                        </div>
                        <div className='but'>
                            <button className='add' onClick={() => onAdd(item)}>+</button>
                            <button className='remove' onClick={() => onRemove(item)}>-</button>
                        </div>
                        <div className='text-right but'>
                            {item.qty} X ${item.price}
                        </div>
                    </div>
                ))}

                {cartItems.length !==0 && (
                    <div>
                        <hr></hr>
                        <div className='row'>
                            <div className=''>Giá sản phẩm</div>
                            <div className='text-right'>${itemsPrice}</div>
                        </div>

                        <div className='row'>
                            <div className=''>Giá thuế</div>
                            <div className='text-right'>${taxPrice}</div>
                        </div>


                        <div className='row'>
                            <div className=''>Tổng giá</div>
                            <div className='text-right'>${totalPrice}</div>
                        </div>
                        <hr></hr>
                        <div className='btn'>
                        <button onClick={()=> alert('check')}>
                            Checkout
                        </button>
                        </div>
                    </div>
                )}
             </div>
        </div>
    ) 
}