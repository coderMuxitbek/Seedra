import { useNavigate } from 'react-router-dom';
import '../OrderSummary/OrderSummary.scss';
import { useEffect, useState } from 'react';

const OrderSummary = ({ cart, total }) => {
    const navigate = useNavigate();

    const [delivery, setDelivery] = useState(0);
    const [percent, setPercent]= useState(0);

    useEffect(() => {
            if (delivery === "shipping") {
                setPercent(15)
            }
            if (delivery === "truck") {
                setPercent(10)
            }
            if (delivery === "air") {
                setPercent(20)
            }
    }, [delivery])

    const sendTotalLocally = ()=> {
        localStorage.setItem("totalPrice", JSON.stringify(total / 100 * percent + total))
        navigate("/cartCheckout")
    }



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
                    <select onChange={(e)=> setDelivery(e.target.value)} defaultValue="shipping" className='deliveryAndPromo-selectDelivery' name="" id="">
                        <option className='deliveryAndPromo-selectDelivery-option' value="truck">Truck +10%</option>
                        <option className='deliveryAndPromo-selectDelivery-option' value="shipping">Shipping +15%</option>
                        <option className='deliveryAndPromo-selectDelivery-option' value="air">Air +20%</option>
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
                    <p className='sumTotalsContinue-summaryTotals-price'>${total / 100 * percent + total}</p>
                </div>

                <button onClick={sendTotalLocally} className='sumTotalsContinue-btn'>Continue</button>
            </div>
        </div>
    )
};

export default OrderSummary;