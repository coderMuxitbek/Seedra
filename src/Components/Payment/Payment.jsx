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

const Payment = () => {
    const [cardNumber, setCardNumber] = useState();
    const [expiringdate, setExpiringdate] = useState();
    const [ccv, setCcv] = useState();

    const lalala = async () => {

        const generatedToken = Math.random().toString(36).slice(2)

        const response = await axios.post("http://localhost:3000/payments", {
            id: generatedToken,

        })
    }

    return (
        <div className='paymentCont'>
            <div className="paymentNav">
                <div className="paymentNav-backBox">
                    <WestIcon class='paymentNav-backBox-backIcon'></WestIcon>
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
                        <input onChange={(e) => setCardNumber(e.target.value)} className='cardNumberTimeline-cardNumber-input' type="text" placeholder='Card number' />
                    </div>

                    <div className="cardNumberTimeline-timeline">
                        <div className="cardNumberTimeline-timeline-date">
                            <p>Expiring date</p>
                            <input onChange={(e) => setExpiringdate(e.target.value)} type="text" placeholder='Expiring date' />
                        </div>

                        <div className="cardNumberTimeline-timeline-CCV">
                            <p className='cardNumberTimeline-timeline-CCV-text'>CCV</p>
                            <input onChange={(e) => setCcv(e.target.value)} className='cardNumberTimeline-timeline-CCV-input' type="text" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="totalsPayment">
                <div className="totalAmountPayment">
                    <p className='totalAmountPayment-text'>Total amount</p>
                    <p className='totalAmountPayment-price'>$12.56</p>
                </div>

                <button className='paymentLastBtn'>
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