import '../CartDetails/CartDetails.scss';
import { useState, useEffect } from 'react';
import SeedPacketShadow from '../../assets/Images/image 1 (2).png';
import CornPacket from '../../assets/Images/image 1.png';
import TwoSeedPacket from '../../assets/Images/image 1 (1).png';
import OrderSummary from '../OrderSummary/OrderSummary';
import axios from 'axios';
import HeadProducts from '../HeadProducts/HeadProducts';
import Cross from '../../assets/Images/Frame 98.png';

const CartDetails = ({ cart, total, AddCart, RemoveItem }) => {

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
                                    <span onClick={() => RemoveItem(prod)} className='chosenProduct-addMoreBtnsBox-addBtn-minus'>-</span>
                                    <p className='chosenProduct-addMoreBtnsBox-addBtn-qty'>{prod.qty}</p>
                                    <span onClick={() => AddCart(prod)} className='chosenProduct-addMoreBtnsBox-addBtn-plus'>+</span>
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

            <div className="chosensQtyMedia">
                <div className="chosenCartNavMedia">
                    <p className='chosenCartNavMedia-mention'>Your cart</p>
                    <p className='chosenCartNavMedia-number'>{cart.length} items</p>
                </div>

                <div className="chosenProducts">
                    {cart.map((prod, i) => {
                        return <div key={i} className="chosenProductMedia">
                            <img className='chosenProductMedia-crossDelete' src={Cross} alt="" />
                            <div className="chosenProductMedia-withoutCross">
                                <div className="chosenProductMedia-withoutCross-productDescription">
                                    <p className='chosenProductMedia-withoutCross-productDescription-text'>{prod.text}</p>
                                    <img className='chosenProductMedia-withoutCross-productDescription-image' src={prod.image} alt="" />
                                </div>

                                <div className="chosenProductMedia-withoutCross-productQtyBox">

                                    <div className="chosenProductMedia-withoutCross-productQtyBox-amountBig">
                                        <p className='chosenProductMedia-withoutCross-productQtyBox-amountBig-mention'>Amount</p>
                                        <div className="chosenProductMedia-withoutCross-productQtyBox-amountBig-amountBox">
                                            <span onClick={() => RemoveItem(prod)} className='chosenProductMedia-withoutCross-productQtyBox-amountBig-amountBox-minus'>-</span>
                                            <p className='chosenProductMedia-withoutCross-productQtyBox-amountBig-amountBox-qty'>{prod.qty}</p>
                                            <span style={{cursor: "pointer"}} onClick={() => AddCart(prod)} className='chosenProductMedia-withoutCross-productQtyBox-amountBig-amountBox-plus'>+</span>
                                        </div>
                                    </div>


                                    <div className="chosenProductMedia-withoutCross-productQtyBox-priceBox">
                                        <p className='chosenProductMedia-withoutCross-productQtyBox-priceBox-mention'>Price</p>
                                        <p className='chosenProductMedia-withoutCross-productQtyBox-priceBox-price'>${prod.price}</p>
                                    </div>

                                    <div className="chosenProductMedia-withoutCross-productQtyBox-totalBox">
                                        <p className='chosenProductMedia-withoutCross-productQtyBox-totalBox-mention'>Total</p>
                                        <p className='chosenProductMedia-withoutCross-productQtyBox-totalBox-total'>${prod.price * prod.qty}</p>
                                    </div>
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