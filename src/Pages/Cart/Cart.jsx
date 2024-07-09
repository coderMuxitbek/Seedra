import '../Cart/Cart.scss';
import CartDetails from '../../Components/CartDetails/CartDetails';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartItem, setCartItem] = useState([])

    const GetData = async () => {
        const { data } = await axios.get("http://localhost:3000/cart");
        setCart(data)
    }

    const AddCart = async (product) => {
        const existing = cart.find((item) => item.id === product.id)
        await axios.put(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: existing.qty + 1 });
        const newItem = cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        setCartItem(newItem)
        GetData()
    }

    const RemoveItem = async (product) => {
        const existing = cart.find((item) => item.id === product.id);

        if (existing.qty === 1) {
            console.log("exist");
            await axios.delete(`http://localhost:3000/cart/${existing.id}`, { existing });
            setCart((prev) => {
                return prev.filter((item) => item.id !== product.id)
            })
        } else {
            console.log("not exist");
            await axios.patch(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: existing.qty - 1 });
            setCart((prev) => {
                return prev.map((item) => item.id === existing.id ? { ...item, qty: item.qty - 1 } : item)
            })
        }
        GetData()
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

    return (
        <>
            <div className="CartContainer">
                <CartDetails AddCart={AddCart} RemoveItem={RemoveItem} cart={cart} total={total} />
            </div>
        </>
    )
};

export default Cart;