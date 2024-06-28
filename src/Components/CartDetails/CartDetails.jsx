import '../CartDetails/CartDetails.scss';
import { useState, useEffect } from 'react';
import SeedPacketShadow from '../../assets/Images/image 1 (2).png';
import CornPacket from '../../assets/Images/image 1.png';
import TwoSeedPacket from '../../assets/Images/image 1 (1).png';
import OrderSummary from '../OrderSummary/OrderSummary';
import axios from 'axios';
import HeadProducts from '../HeadProducts/HeadProducts';

const CartDetails = ({ cart, total }) => {
    const [cartItem, setCartItem] = useState([])
    // console.log(cartItem);

    // const fetchItem = async () => {
    //     const { data } = await axios.get("http://localhost:3000/cart")
    //     setCartItem(data)
    //     console.log(data);
    // }

    // useEffect(()=> {
    //     fetchItem()
    // }, [])

    // const incrProductCount = (prod) => {
    //     const newItem = cartItem.map((item) =>
    //         item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
    //     );
    //     setCartItem(newItem);
    // };


    const AddCart = async (product) => {
        const existing = cartItem.find((item) => item.id === product.id)

        if (existing) {
            console.log("exist");
            await axios.put(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: existing.qty + 1 });
            const newItem = cartItem.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
            setCartItem(newItem)
        } else {
            console.log("not exist");
            await axios.post("http://localhost:3000/cart", { ...product, qty: 1 });
            setCartItem((prev) => {
                return [...prev, { ...product, qty: 1 }]
            })
        }
    }

    const RemoveItem = async (product) => {
        const existing = cartItem.find((item) => item.id === product.id)

        if (existing === 1) {
            console.log("exist");
            await axios.delete(`http://localhost:3000/cart/${existing.id}`, { existing });
            setCartItem((prev) => {
                return prev.filter((item) => item.id !== product.id)
            })
        } else {
            console.log("not exist");
            await axios.delete(`http://localhost:3000/cart/${existing}`, { ...existing, qty: existing.qty - 1 });
            setCartItem((prev) => {
                return prev.map((item) =>
                    item.id === existing.id ? { ...item, qty: item.qty - 1 } : item)
            })
        }
    }

    return (
        <div className='myCart'>
            <div className="chosenItemsBigBox">
                <div className="myCartQtyLine">
                    <div className="myCartQtyLine-myCartQty">
                        <p className='myCartQtyLine-myCartQty-text'>Your cart</p>
                        <p className='myCartQtyLine-myCartQty-qty'>{cart.length} items</p>
                    </div>
                </div>

                <div className="productDetailTitles">
                    <p className='productDetailTitles-details'>PRODUCT DETAILS</p>

                    <div className="productDetailTitles-amountPriceTotal">
                        <p className='productDetailTitles-amountPriceTotal-amount'>AMOUNT</p>
                        <div className="productDetailTitles-amountPriceTotal-priceTotal">
                            <p className='productDetailTitles-amountPriceTotal-priceTotal-price'>PRICE</p>
                            <p className='productDetailTitles-amountPriceTotal-priceTotal-total'>TOTAL</p>
                        </div>
                    </div>
                </div>

                <div className="chosenProductsBox">
                    {cart.map((prod, i) => {
                        return <div key={i} className="chosenProduct">
                            <div className="chosenProduct-withImage">
                                <img className='chosenProduct-withImage-img' src={prod.image} alt="" />
                                <p className='chosenProduct-withImage-text'>{prod.text}</p>
                            </div>

                            <div className="chosenProduct-addMoreBtnsBox">
                                <div className="chosenProduct-addMoreBtnsBox-addBtn">
                                    <button onClick={() => RemoveItem(prod)} className='chosenProduct-addMoreBtnsBox-addBtn-minus'>-</button>
                                    <p className='chosenProduct-addMoreBtnsBox-addBtn-qty'>{prod.qty}</p>
                                    <button onClick={() => AddCart(prod)} className='chosenProduct-addMoreBtnsBox-addBtn-plus'>+</button>
                                </div>

                                <div className="chosenProduct-addMoreBtnsBox-calculatingsBox">
                                    <p className='chosenProduct-addMoreBtnsBox-calculatingsBox-price'>${prod.price}</p>
                                    <p className="chosenProduct-addMoreBtnsBox-calculatingsBox-total">${prod.price * prod.qty}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <OrderSummary cart={cart} total={total} />
        </div>
    )
};

export default CartDetails;