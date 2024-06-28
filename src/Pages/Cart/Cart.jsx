import '../Cart/Cart.scss';
import CartDetails from '../../Components/CartDetails/CartDetails';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const GetData = async () => {
        const { data } = await axios.get("http://localhost:3000/cart");
        setCart(data)
    }

    useEffect(() => {
        GetData()
    }, [cart])


    useEffect(() => {
        let total = 0;

        cart.map((item) => {
            total = total + item.price * item.qty;
        });

        setTotal(total)
    }, [cart])



    return (
        <>
            <div className="CartContainer">
                <CartDetails cart={cart} total={total}/>
            </div>
        </>
    )
};

export default Cart;