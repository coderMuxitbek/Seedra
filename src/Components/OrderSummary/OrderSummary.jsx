import { useNavigate } from 'react-router-dom';
import '../OrderSummary/OrderSummary.scss';
import { useState } from 'react';

const OrderSummary = ({ cart, total }) => {
    const navigate = useNavigate();

    const [delivery, setDelivery] = useState(0)


    return (
        <div className="orderSummaryBox">
            <div className="orderingsums">
                <div className="orderSummary">
                    <p className='orderSummary-orderText'>Order summary</p>
                    <div className="orderSummary-qtyPriceBox">
                        <p className='orderSummary-qtyPriceBox-qty'>{cart.length} ITEMS</p>
                        <p className='orderSummary-qtyPriceBox-price'>${total}</p>
                    </div>
                </div>

                <div className="deliveryAndPromo">
                    <select className='deliveryAndPromo-selectDelivery' name="" id="">
                        <option onClick={() => {
                            setDelivery(10)
                            console.log(delivery);
                        }} className='deliveryAndPromo-selectDelivery-option' value="truck">
                            Truck +10%
                        </option>

                        <option onClick={() => {
                            setDelivery(15)
                            console.log(delivery);
                        }} className='deliveryAndPromo-selectDelivery-option' value="shipping">
                            Shipping +15%
                        </option>

                        <option onClick={() => {
                            setDelivery(20)
                            console.log(delivery);
                        }} className='deliveryAndPromo-selectDelivery-option' value="air">
                            Air +20%
                        </option>
                    </select>

                    <div className="deliveryAndPromo-promoBox">
                        <p className='deliveryAndPromo-promoBox-promo'>Promocode</p>
                        <input className='deliveryAndPromo-promoBox-inpo' type="text" placeholder='Promocode' />
                    </div>
                </div>
            </div>

            <div className="sumTotalsContinue">
                <div className="sumTotalsContinue-summaryTotals">
                    <p className='sumTotalsContinue-summaryTotals-text'>Total amount</p>
                    <p className='sumTotalsContinue-summaryTotals-price'></p>
                </div>

                <button onClick={() => navigate("/cartCheckout")} className='sumTotalsContinue-btn'>Continue</button>
            </div>
        </div>
    )
};

export default OrderSummary;