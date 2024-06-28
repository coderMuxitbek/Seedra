import './YourCart.scss';
import SeedPacketShadow from '../../assets/Images/image 1 (2).png';
import CornPacket from '../../assets/Images/image 1.png';
import TwoSeedPacket from '../../assets/Images/image 1 (1).png';

const YourCart = ({ cart, total }) => {
    return (
        <div className="personalInfoCheckoutYourCartBig">
            <div className='personalInfoCheckoutYourCart'>
                <p className='personalInfoCheckoutYourCart-firstMention'>Your cart</p>

                <div className="personalInfoCheckoutYourCart-chosens">
                    {cart.map((product) => {
                        return <div className='personalInfoCheckoutYourCart-chosens-chosen'>
                            <p className='personalInfoCheckoutYourCart-chosens-chosen-text'>{product.text}</p>
                            <p className='personalInfoCheckoutYourCart-chosens-chosen-price'>${product.price}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="personalInfoCheckoutYourCart-totals">
                <p className='personalInfoCheckoutYourCart-totals-mention'>Total amount</p>
                <p className='personalInfoCheckoutYourCart-totals-price'>${total}</p>
            </div>
        </div>
    )
};

export default YourCart;