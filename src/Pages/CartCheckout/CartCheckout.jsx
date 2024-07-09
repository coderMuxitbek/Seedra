import '../CartCheckout/CartCheckout.scss';
import WestIcon from '@mui/icons-material/West';
import GreenLight from '../../assets/Images/Frame 41.png';
import GreyLight from '../../assets/Images/Frame 42.png';
import CheckoutPersonal from '../../Components/CheckoutPersonal/CheckoutPersonal'
import YourCart from '../../Components/YourCart/YourCart';
import Payment from '../../Components/Payment/Payment';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CartCheckout = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const GetData = async () => {
        const { data } = await axios.get("http://localhost:3000/cart");
        setCart(data)
    }

    useEffect(() => {
        GetData()
    }, [])

    useEffect(() => {
        let total = 0;

        cart.map((item) => {
            total = total + item.price * item.qty;
        });

        setTotal(total)
    }, [cart])

    const [personCheck, setPersonCheck] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        country: "",
    });

    const PersonOnchange = (e) => {
        const { name, value } = e.target;

        setPersonCheck((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // useEffect(()=> {

    // }, []);

    const ContinueBtn = () => {
        localStorage.setItem("userName", (personCheck.name))
        localStorage.setItem("userPhone", (personCheck.phone))
        localStorage.setItem("userAddress", (personCheck.address))
        localStorage.setItem("userCity", (personCheck.city))
        localStorage.setItem("userCountry", (personCheck.country))

        navigate("/payment")
    }



    return (
        <div className='cartCheckoutCont'>
            <div className='cartCheckoutComp1'>
                <div className="NoContinue">
                    <div className="personalInfoCont">
                        <div className="personCheckNavBox">
                            <div className="personCheckNavBox-westIconBox">
                                <WestIcon onClick={() => navigate("/cart")} class='personCheckNavBox-westIconBox-westIcon'></WestIcon>
                                <p className='personCheckNavBox-westIconBox-checkoutMention'>Checkout</p>
                            </div>

                            <div className="personCheckNavBox-lightsBox">
                                <img className='personCheckNavBox-lightsBox-greenLight' src={GreenLight} alt="" />
                                <img className='personCheckNavBox-lightsBox-greyLight' src={GreyLight} alt="" />
                            </div>
                        </div>

                        <CheckoutPersonal PersonOnchange={PersonOnchange} />
                        {/* <Payment /> */}
                    </div>
                    <div className="checkoutYourCartBox">
                        <YourCart cart={cart} total={total} />
                    </div>
                </div>

                <button onClick={ContinueBtn} className='checkoutContinuingBtn'>Continue</button>
            </div>
        </div>
    )
}

export default CartCheckout;