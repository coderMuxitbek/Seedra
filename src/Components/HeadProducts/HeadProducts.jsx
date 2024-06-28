import { useEffect, useState } from "react";
import axios from 'axios';
import MainNavBtn from "../MainNavBtn/MainNavBtn";
import Star from '../../assets/Images/Vector (3).png';
import Savat from '../../assets/Images/icon_cart_simple.png';
import DoneIcon from '@mui/icons-material/Done';
import Filter from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
import '../HeadProducts/HeadProducts.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OurBlogHead from "../OurBlogHead/OurBlogHead";
import SeedGrow from "../SeedGrow/SeedGrow";

const OurProdsCode = ({ FilterHandler, inputData, filteredData, handleChange, InputHandler, openFilter }) => {
    const navigate = useNavigate();
    const [cartItem, setCartItem] = useState([]);
    console.log(cartItem);

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

    return (
        <>
            <div className="ourProductsBiggestCont">
                <div className="ourProductsBiggestCont-mainNavBtns">
                    <p className="ourProductsBiggestCont-mainNavBtns-text">Our products</p>
                    <MainNavBtn FilterHandler={FilterHandler} inputData={inputData} filteredData={filteredData} InputHandler={InputHandler} />
                </div>
                <div className={openFilter ? "ourProductsTwoCont ourProdsActiveBox" : "ourProductsTwoCont"}>
                    <Filter openFilter={openFilter} inputData={inputData} handleChange={handleChange} FilterHandler={FilterHandler}/>

                    <div className="ourProdsContainer">
                        {filteredData.map((item) => {
                            return <div onClick={()=> navigate(`/eachProduct/${item.id}`)} key={item.id} className={openFilter ? "ourProdsContainer-productBox prodoActive" : "ourProdsContainer-productBox"}>
                                <img className={openFilter ? 'ourProdsContainer-productBox-image imageActive' : "ourProdsContainer-productBox-image"} src={item.image} alt="" />
                                <div className="ourProdsContainer-productBox-threeWork">
                                    <div className="ourProdsContainer-productBox-threeWork-starBox">
                                        <div className="ourProdsContainer-productBox-threeWork-starBox-stars">
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                        </div>
                                        <p>(135)</p>
                                    </div>

                                    <div className="ourProdsContainer-productBox-threeWork-addCartBox">
                                        <p className='ourProdsContainer-productBox-threeWork-addCartBox-seeds'>{item.text}</p>
                                        <div className="ourProdsContainer-productBox-threeWork-addCartBox-cartWork">
                                            <p className='ourProdsContainer-productBox-threeWork-addCartBox-cartWork-price'>${item.price}</p>
                                            {/* <img className='ourProdsContainer-productBox-threeWork-addCartBox-cartWork-cartImg' src={Savat} alt="" /> */}
                                            <ShoppingCartOutlinedIcon className="shopCartMUI MuiNativeSelect-filled" onClick={() => AddCart(item)} color="success"></ShoppingCartOutlinedIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <OurBlogHead/>
            {/* <SeedGrow/> */}
        </>
    )
};

export default OurProdsCode;