import '../Payment/Payment.scss';
import WestIcon from '@mui/icons-material/West';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GreenLight from '../../assets/Images/Frame 41.png';
import GreyLight from '../../assets/Images/Frame 42.png';
import ApplePay from '../../assets/Images/cardTypes/Path.png';
import Visa from '../../assets/Images/cardTypes/Group (2).png';
import MasterCard from '../../assets/Images/cardTypes/MasterCard.png';
import PayPal from '../../assets/Images/cardTypes/Group (3).png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    const [paymentObj, setPaymentObj] = useState({
        cardNumber: "",
        expiringDate: "",
        CCV: "",
    });

    const [FormPaymentError, setFormPaymentError] = useState({})

    const PaymentOnchange = (e) => {
        const { name, value } = e.target;

        setPaymentObj((prev) => {
            return { ...prev, [name]: value }
        });

        console.log(paymentObj);
    };

    const CheckedContinue = () => {
        setFormPaymentError(CheckPay(paymentObj))
        console.log("lalala");
    }

    const CheckPay = (state) => {
        const error = {};

        const CheckName = {
            cardNumber: /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/,
            expiringDate: /^(0[1-9]|1[0-2])\/\d{4}$/,
            CCV: /^^\d{3,4}$/,
        }

        if (!CheckName.cardNumber.test(state.cardNumber)) {
            error.cardNumber = "not correct card number"
        }

        if (!CheckName.expiringDate.test(state.expiringDate)) {
            error.expiringDate = "not correct expiring date"
        }

        if (!CheckName.CCV.test(state.CCV)) {
            error.CCV = "not correct CCV"
        }

        return error;
    }

    return (
        <div className='paymentCont'>
            <div className="paymentNav">
                <div className="paymentNav-backBox">
                    <p onClick={() => navigate("/cartCheckout")}><WestIcon class='paymentNav-backBox-backIcon'></WestIcon></p>
                    <p className='paymentNav-backBox-mention'>Payment info</p>
                </div>

                <div className="paymentNav-lights">
                    <img className='paymentNav-lights-green' src={GreenLight} alt="" />
                    <img className='paymentNav-lights-grey' src={GreyLight} alt="" />
                </div>
            </div>

            <div className="paymentChecksAdditional">
                <div className="cardInfoCont">
                    <div className="cardInfoCont-cardTypeBox">
                        <div className="cardInfoCont-cardTypeBox-applePay">
                            <img src={ApplePay} alt="" />
                        </div>

                        <div className="cardInfoCont-cardTypeBox-visa">
                            <img src={Visa} alt="" />
                        </div>

                        <div className="cardInfoCont-cardTypeBox-masterCard">
                            <img src={MasterCard} alt="" />
                        </div>

                        <div className="cardInfoCont-cardTypeBox-payPal">
                            <img src={PayPal} alt="" />
                        </div>
                    </div>
                </div>

                <div className="cardNumberTimeline">
                    <div className="cardNumberTimeline-cardNumber">
                        <p className='cardNumberTimeline-cardNumber-text'>Card number</p>
                        <input name='cardNumber' onChange={PaymentOnchange} className='cardNumberTimeline-cardNumber-input' type="number" placeholder='Card number' />
                        {FormPaymentError.cardNumber && <p id='errorPayment'>Must be 16 numbers</p>}
                    </div>

                    <div className="cardNumberTimeline-timeline">
                        <div className="cardNumberTimeline-timeline-date">
                            <p>Expiring date <span>MM/YYYY</span></p>
                            <input name='expiringDate' className='cardNumberTimeline-timeline-input' onChange={PaymentOnchange} type="text" placeholder='Expiring date' />
                            {FormPaymentError.expiringDate && <p id='errorPayment'>Expiring date must be written with /</p>}
                        </div>

                        <div className="cardNumberTimeline-timeline-CCV">
                            <p className='cardNumberTimeline-timeline-CCV-text'>CCV</p>
                            <input name='CCV' onChange={PaymentOnchange} className='cardNumberTimeline-timeline-input' type="text" placeholder='CCV'/>
                            {FormPaymentError.CCV && <p id='errorPayment'>Not correct CCV</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="totalsPayment">
                <div className="totalAmountPayment">
                    <p className='totalAmountPayment-text'>Total amount</p>
                    <p className='totalAmountPayment-price'>$12.56</p>
                </div>

                <button onClick={CheckedContinue} className='paymentLastBtn'>
                    <p className='paymentLastBtn-price'>$12.56</p>
                    <div className="paymentLastBtn-lastSteps">
                        <p>Continue</p>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </div>
                </button>
            </div>
        </div>
    )
};

export default Payment;